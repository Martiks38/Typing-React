function createPerformance(wpm: number | null, time: number) {
  class Performance {
    readonly wpm: number | null
    readonly time: number

    constructor(wpm, time) {
      this.wpm = wpm
      this.time = time
    }
  }

  return new Performance(wpm, time)
}

export default createPerformance
