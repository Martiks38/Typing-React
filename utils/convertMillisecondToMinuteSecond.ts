function convertMillisecondToMinuteSecond(milliseconds: number): string {
  let minute = Math.floor(milliseconds / 60000)
    .toString()
    .padStart(2, '0')
  let seconds = Math.floor((milliseconds % 60000) / 1000)
    .toString()
    .padStart(2, '0')

  return minute + ':' + seconds
}

export default convertMillisecondToMinuteSecond
