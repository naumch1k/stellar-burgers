export const capitalizeFirstLetter = (string: string) => {
  if (string.length === 0) return string

  const lowercaseString = string.toLowerCase()
  return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1)
}
