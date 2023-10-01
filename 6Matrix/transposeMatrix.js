function transposeMatrix(matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    result.push(row);
  }
  return result;
}

const originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
];
const transposedMatrix = transposeMatrix(originalMatrix);
console.log(transposedMatrix);
// Output: [[1, 4], [2, 5], [3, 6]]
