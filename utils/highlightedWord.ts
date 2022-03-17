/*
 * @TODO: modificar textSplit implementando Intl.segmenter cuando tenga mayor soporte o por polyfill
 */

function highlightedWord(text: string, ind: number): string {
  let textSplit = text.split(' ')

  return (
    (ind === 0 ? '' : textSplit.slice(0, ind).join(' ') + ' ') +
    textSplit[ind].toUpperCase() +
    ' ' +
    textSplit.slice(ind + 1).join(' ')
  )
}

export default highlightedWord
