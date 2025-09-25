const rellenarConAsteriscos = (txt: string): string =>
  txt.padEnd(10, "*");
console.log("38:", rellenarConAsteriscos("Hola"));