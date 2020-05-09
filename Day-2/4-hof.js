function map(arr,fn) { //addOne ---fn 
    const newarr = []

    arr.forEach(function(val){
        newarr.push(fn(val))
    })
    return newarr
}

function addOne(num) {
    return num + 1
}

const x = [0,1,2,3]
console.log( map(x,addOne))

function filter(arr,fn) {
    const newArr = []
    arr.forEach(val => {
        if(fn(val)) newArr.push(val)
    })
    return newArr

}
function iseven(num) {
    return num % 2 ===0
}
console.log(filter(x,iseven))

function reduce(arr,fn,initialVal) {
    let returnVal = initialValarr
    arr.foreach(val => {
        retunrVal = fn(returnVal,val)
    })
}


