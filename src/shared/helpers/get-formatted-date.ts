const getDiffDays = (date: Date) =>
    Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

export const getFormattedTime = (date: Date): string => {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const amPm = hours >= 12 ? 'PM' : 'AM'

  const formattedHours = hours % 12 || 12

   return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${amPm}`
}

export const getFormattedDate = (date: Date): string => {
    const diffDays = getDiffDays(date)
    return `${diffDays} days ago, ${getFormattedTime(date)}`
}

export const isToday = (date: Date): boolean => getDiffDays(date) === 0
export const isYesterday = (date: Date): boolean => getDiffDays(date) === 1
