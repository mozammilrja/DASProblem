function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

const sortedArray = [3, 7, 11, 13, 19, 27, 35];
const targetValue = 27;
const firstOccurrenceIndex = findFirstOccurrence(sortedArray, targetValue);

if (firstOccurrenceIndex !== -1) {
  console.log(
    `First occurrence of ${targetValue} found at index ${firstOccurrenceIndex}`
  );
} else {
  console.log(`${targetValue} not found in the array`);
}
