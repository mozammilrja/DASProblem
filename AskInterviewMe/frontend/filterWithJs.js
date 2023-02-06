var arr = [
    {
        name: "abc",
        age: 23
    },
    {
        name: "abc",
        age: 27
    },
    {
        name: "abc",
        age: 24
    },
]

// const result = arr.filter((val) => val.age > 23)


const result = arr.filter((val) => {
    return val.age > 23

})

console.log(result);



