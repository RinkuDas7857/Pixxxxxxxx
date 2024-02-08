import path from 'node:path'
import * as glob from 'glob'

import { composeStories } from '@storybook/react'
import renderer from 'react-test-renderer'
import { addSerializer } from 'jest-specific-snapshot'
import { styleSheetSerializer } from 'jest-styled-components'

import type { Meta, StoryFn } from '@storybook/react'

addSerializer(styleSheetSerializer)

type StoryFile = {
  default: Meta
  [name: string]: StoryFn | Meta
}

const compose = (
  entry: StoryFile
): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry)
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(
        entry
      )}, ${e}`
    )
  }
}

function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const storyFiles = glob.sync(
    path.join(__dirname, '../packages/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}')
  )

  return storyFiles.map((filePath) => {
    const storyFile = require(filePath)
    return { filePath, storyFile }
  })
}

// Recreate similar options to Storyshots. Place your configuration below
const options = {
  suite: 'Storybook Tests',
  storyKindRegex: /^.*?DontTest$/,
  storyNameRegex: /UNSET/,
  snapshotsDirName: '__snapshots__',
  snapshotExtension: 'snap',
}

describe(options.suite, () => {
  getAllStoryFiles().forEach(({ storyFile, filePath }) => {
    const meta = storyFile.default
    const title = meta.title || filePath
    const dir = path.join(path.dirname(filePath), options.snapshotsDirName)
    const filename = [
      path.basename(filePath, '.tsx'),
      options.snapshotExtension,
    ].join('.')
    const snapshotPath = path.join(dir, filename)

    if (
      options.storyKindRegex.test(title) ||
      meta.parameters?.storyshots?.disable
    ) {
      return
    }

    describe(title, () => {
      const stories = Object.entries(compose(storyFile))
        .map(([name, story]) => ({ name, story }))
        .filter(({ name, story }) => {
          return (
            !options.storyNameRegex.test(name) &&
            !story.parameters.storyshots?.disable
          )
        })

      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module, without a disable parameter, or add parameters.storyshots.disable in the default export of this file.`
        )
      }

      for (const { name, story } of stories) {
        const testFn = story.parameters.storyshots?.skip ? test.skip : test

        testFn(name, async () => {
          const mounted = renderer.create(story()).toJSON()
          expect(mounted).toMatchSpecificSnapshot(snapshotPath)
        })
      }
    })
  })
})
