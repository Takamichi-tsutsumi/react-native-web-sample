// @flow
import pathToRegexp from 'path-to-regexp'

const matchPath = (route: string, path: string): boolean => {
  const match: ?Array<string> = pathToRegexp(route).exec(path)
  if (match) {
    return true
  }

  return false
}

export default matchPath
