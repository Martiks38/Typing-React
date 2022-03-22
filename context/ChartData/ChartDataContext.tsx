import { createContext } from 'react'
import { ChartDataContextProps } from 'types'

const ChartDataContext = createContext<ChartDataContextProps>(
  {} as ChartDataContextProps
)

export default ChartDataContext
