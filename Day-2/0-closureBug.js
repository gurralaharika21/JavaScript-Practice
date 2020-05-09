function makeFunctionArray(){
    const arr = []

    for (var i = 0; i < 5;i++) {
        arr.push(function () {console.log(i)})
        // arr.push(console.log(i))
        // console.log(i)
    }
    console.log("inside",i)

    return arr
}
// console.log("outside",i) //doesn't work
const functionArr = makeFunctionArray()
// console.log(functionArr)
functionArr[0]()//we expect this to log 0,but it doesn't
functionArr[2]()