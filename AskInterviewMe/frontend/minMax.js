let numbers = [1, 2, 3, 4, 5];

function getMinMax(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return {
        min: min,
        max: max
    };
}

let result = getMinMax(numbers);
console.log(result.min); // 1
console.log(result.max); // 5
