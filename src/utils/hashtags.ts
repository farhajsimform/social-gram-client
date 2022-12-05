export const findHashtags = (searchText: string) => {
  // eslint-disable-next-line no-useless-escape
  const regexp = /(\s|^)\#\w\w+\b/gm
  const result = searchText.match(regexp)
  if (result) {
    return result.map((s) => s.trim())
  } else {
    return false
  }
}
