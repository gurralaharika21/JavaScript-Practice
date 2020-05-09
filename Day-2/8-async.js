function printOne() {
    console.log("one")
}
function printtwo() {
    console.log("two")
}
function printthree() {
    console.log("three")
}

setTimeout(printOne,1000)

setTimeout(printtwo,0)
printthree()
