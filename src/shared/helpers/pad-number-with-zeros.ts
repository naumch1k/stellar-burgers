export const padNumberWithZeros = (number: number, length = 5, paddingChar = '0') => {
  return String(number).padStart(length, paddingChar)
}
