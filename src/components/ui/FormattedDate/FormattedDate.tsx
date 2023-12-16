import {
  getFormattedDate,
  isYesterday,
  isToday,
  getFormattedTime,
 } from 'shared/helpers/get-formatted-date'

 interface IFormattedDateProps {
  date: Date;
  className?: string;
 }

export const FormattedDate = ({ date, className }: IFormattedDateProps) => {
  if (isToday(date)) {
    return <span className={className}>Today, {getFormattedTime(date)}</span>
  }

  if (isYesterday(date)) {
    return <span className={className}>Yesterday, {getFormattedTime(date)}</span>
  }

  return <span className={className}>{getFormattedDate(date)}</span>
}
