import { CSSObject } from 'styled-components'

export interface Context {
  cancelHalfLeadingPx?: number
  hasVerticalPadding?: boolean
  boxShadowTransition?: boolean
  colorTransition?: boolean
  backgroundColorTransition?: boolean
}

const internalSym: unique symbol = Symbol('internal')

export function internal(
  operation: (context: Context) => CSSObject,
  context: Context = {}
): Internal {
  return {
    [internalSym]: {
      operation,
      context,
    },
  }
}

export function __DO_NOT_USE_GET_INTERNAL__(internal: Internal) {
  return internal[internalSym]
}

export interface Internal {
  [internalSym]: {
    operation: (context: Context) => CSSObject
    context: Context
  }
}
