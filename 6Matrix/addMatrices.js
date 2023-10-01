function addMatrices(matrixA, matrixB) {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
}

const matrixA = [
  [1, 2],
  [3, 4],
];
const matrixB = [
  [5, 6],
  [7, 8],
];

const resultMatrix = addMatrices(matrixA, matrixB);
console.log(resultMatrix);
// Output: [[6, 8], [10, 12]]
