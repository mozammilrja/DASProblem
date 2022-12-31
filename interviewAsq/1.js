// 00055544299992338
// output 054938
const str = "00055544299992338"

function removeDuplicate(str) {
    const convertArr = str.split('')
    let result = convertArr.filter((val, index) => {
        return convertArr.indexOf(val) == index
    })
    return result.join('')
}


console.log(removeDuplicate(str));