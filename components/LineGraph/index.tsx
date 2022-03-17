import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js'
import { useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import convertMillisecondToMinuteSecond from 'utils/convertMillisecondToMinuteSecond'
import type { ChartData } from 'chart.js'
import type { performance } from 'types'

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Tooltip)

function LineGraph() {
  const [data, setData] = useState<ChartData<'line'>>({
    datasets: [],
    labels: [],
  })

  const axisData: { current: { labels: string[]; data: (number | null)[] } } =
    useRef({
      labels: [],
      data: [],
    })

  useEffect(() => {
    let data = sessionStorage.getItem('resultTemp')
    let objResult = []

    if (data) objResult = JSON.parse(data)

    objResult.forEach((result: performance) => {
      let time = convertMillisecondToMinuteSecond(result.time)

      axisData.current.data.push(result.wpm)
      axisData.current.labels.push(time)
    })

    if (axisData.current.data.length) {
      setData({
        datasets: [
          {
            label: 'wpm',
            data: axisData.current.data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(44, 226, 226)',
          },
        ],
        labels: axisData.current.labels,
      })
    }
  }, [])

  return (
    <Line
      data={data}
      options={{
        scales: {
          x: {
            ticks: {
              color: '#222',
              font: {
                weight: '600',
              },
            },
            title: {
              align: 'center',
              color: '#222',
              display: true,
              font: {
                size: 16,
                weight: '600',
              },
              text: 'Time',
            },
          },
          y: {
            ticks: {
              color: '#222',
              font: {
                weight: '600',
              },
            },
            title: {
              align: 'center',
              color: '#222',
              display: true,
              font: {
                size: 16,
                weight: '600',
              },
              text: 'wpm',
            },
          },
        },
        responsive: true,
      }}
    />
  )
}

export default LineGraph
