const ultimaAparicion = (arr: number[], v: number): number =>
  arr.lastIndexOf(v);
console.log("18:", ultimaAparicion([1, 2, 3, 2, 4], 2));