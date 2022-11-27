function getMinMax(arr,n) {
    minmax = new Array();
    let i, min, max;


    // check there is only one element return min max
    if (n == 1) {
        minmax.max = arr[0]
        minmax.min = arr[0]
        return minmax;
    }

    if (arr[0] > arr[1]) {
        minmax.max = arr[0]
        minmax.min = arr[1]
    } else {
        minmax.max = arr[1]
        minmax.min = arr[0]
    }
    for ( i = 2; i <n; i++) {
      if (arr[i] > minmax.max) {
        minmax.max = arr[i]
      }else if (arr[i] < minmax.min) {
          minmax.min = arr[i]
      }
        
    }
return minmax

}

let data = [2, 45, 55, 35, 64, 65, 3]
let no = data.length

minmax = getMinMax(data, no)

console.log(minmax.min);
console.log(minmax.max);