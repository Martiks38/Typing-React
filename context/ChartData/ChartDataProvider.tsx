import { useState } from 'react'
import ChartDataContext from './ChartDataContext'
import type { performance, props } from 'types'

function ChartDataProvider({ children }: props) {
  const [performance, setPerformance] = useState<performance[]>([
    { wpm: null, time: 0 },
  ])

  const newData = (data: performance) => {
    setPerformance((prevState) => [...prevState, data])
  }

  const clearData = () => {
    setPerformance((prevState) => {
      prevState.length = 0
      return prevState
    })
  }

  return (
    <ChartDataContext.Provider value={{ performance, newData, clearData }}>
      {children}
    </ChartDataContext.Provider>
  )
}

export default ChartDataProvider
