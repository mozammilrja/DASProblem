// find the second largest numbers


function largest(arr, arr_size) {
    let i, first, second;
    

    // there should be atleast two elements
    if (arr_size < 1) {
        console.log("invalid input");
        return
    }

    // arr sorting in deccending order
    arr.sort();

        // start from second last element
        // as the largest element is at last
    for (let i = arr_size - 2; i >= 0; i--) {
        if (arr[i] != arr[arr_size - 1]) {
            console.log("the second largest element: " + arr[i]);
            return;
            
        }
        
    }
    console.log("there is no second largest element");

    
}


let arr = [12, 35, 1, 10, 34, 1];
let n = arr.length;
largest(arr, n);