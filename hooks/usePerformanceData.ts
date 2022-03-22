import { useContext } from 'react'
import ChartDataContext from 'context/ChartData/ChartDataContext'
import { ChartDataContextProps } from 'types'

export function usePerformanceData() {
  const { performance, clearData, newData } =
    useContext<ChartDataContextProps>(ChartDataContext)

  return {
    performance,
    clearData,
    newData,
  }
}
