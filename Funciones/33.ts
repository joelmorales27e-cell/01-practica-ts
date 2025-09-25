function posicionPalabra(txt: string, palabra: string): number {
  return txt.indexOf(palabra);
}
console.log("33:", posicionPalabra("Hola mundo bonito", "mundo"));