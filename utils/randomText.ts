function randomText(texts: string[]): string {
  let textNumber = Math.floor(Math.random() * texts.length)
  return texts[textNumber]
}

export default randomText
