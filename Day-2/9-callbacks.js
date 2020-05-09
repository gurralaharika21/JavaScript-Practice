function dosomethingwithOne(callback) {
    console.log(callback.toString())
    return callback(1)
}
dosomethingwithOne(console.log)

function dosomethingwithoneasync(callback) {
    setTimeout(() => callback(1),1000)
}
function addOne(num) {return num + 10}
// dosomethingwithoneasync(addOne)
dosomethingwithoneasync(console.log)
// console.log(dosomethingwithoneasync(addOne))


function getuserfromDatabase(callback) {
    setTimeout(() => callback({firstname:"harika",lastname:"reddy"}),1000)

}
// getuserfromDatabase(console.log)

function greetUser(user) {
    console.log("hi," + user.firstname)
}
getuserfromDatabase(greetUser)