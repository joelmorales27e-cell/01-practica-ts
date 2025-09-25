function rellenarConCeros(num: number): string {
  return num.toString().padStart(5, "0");
}
console.log("37:", rellenarConCeros(42));