import { zxcvbnOptions } from '@zxcvbn-ts/core'
import {
  Match,
  MatchEstimated,
  MatchExtended,
  Matcher,
} from '@zxcvbn-ts/core/dist/types'

const minLengthMatcher: Matcher = {
  Matching: class MatchMinLength {
    minLength = 8

    match({ password }: { password: string }) {
      const matches: Match[] = []
      if (password.length <= this.minLength) {
        matches.push({
          pattern: 'minLength',
          token: password,
          i: 0,
          j: password.length - 1,
        })
      }
      return matches
    }
  },
  feedback(_match: MatchEstimated, _isSoleMatch?: any) {
    return {
      warning: zxcvbnOptions.translations.warnings.keyPattern,
      suggestions: [],
    }
  },
  scoring(match: MatchExtended) {
    // this will take the length of the password and multiple it by 10
    // to create a higher scoring the more characters are added
    return match.token.length * 10
  },
}

export { minLengthMatcher }
