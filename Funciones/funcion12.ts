const eliminarTercero = (arr: number[]): number[] => {
  arr.splice(2, 1); // índice 2 = tercer elemento
  return arr;
};
console.log("12:", eliminarTercero([10, 20, 30, 40]));