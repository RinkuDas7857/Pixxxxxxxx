#!/bin/bash

set -euxo pipefail

# project root で実行
cd $(dirname $0)/..

current_branch=$(git symbolic-ref --short HEAD)

pnpm install

if [[ `git status --porcelain | grep pnpm-*.lock` ]]; then
  git add pnpm-*.yaml
  git commit -m "chore: pnpm install after publish"
  git push origin $current_branch
else
  echo 'No diff found after yarn install'
fi

git push origin --tags
