const contienePalabra = (txt: string, palabra: string): boolean =>
  txt.includes(palabra);
console.log("22:", contienePalabra("Me gusta programar en TS", "programar"));