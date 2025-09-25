function encontrarVocales(txt: string): RegExpMatchArray | null {
  return txt.match(/[aeiou]/gi);
}
console.log("35:", encontrarVocales("fortnite"));