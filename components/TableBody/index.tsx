import { useTranslations } from 'hooks/useTranslations'
import RowResult from 'components/RowResult'

function TableBody({ results, short = false }) {
  const { practiceResults } = useTranslations()

  return (
    <tbody>
      {Object.values(results).map((value, index) => (
        <RowResult
          key={Math.floor(Date.now() * Math.random())}
          stat={practiceResults.stats[index]}
          value={
            short && index !== 1
              ? value
              : index === 1 || index === 3
              ? value + '%'
              : value
          }
        />
      ))}
    </tbody>
  )
}

export default TableBody
