function duplicarExpandir(arr: number[]): number[] {
  return arr.flatMap(x => [x, x * 2]);
}
console.log("15:", duplicarExpandir([1, 2, 3]));