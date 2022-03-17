import { useEffect } from 'react'

function useResetResults() {
  useEffect(() => {
    let day = localStorage.getItem('timeclear_typingSo')
    if (day) {
      if (parseInt(day) !== new Date().getDay()) {
        localStorage.removeItem('resultsTypingSo')
        localStorage.setItem('timeclear_typingSo', `${new Date().getDay()}`)
      }
    } else {
      localStorage.setItem('timeclear_typingSo', `${new Date().getDay()}`)
    }
  }, [])
}

export default useResetResults
