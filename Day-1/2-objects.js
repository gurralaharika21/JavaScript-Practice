const o = new Object()
o.firstName = "harika"
o.lastname = "reddy"
o.isTeaching = false
// o.arr = ["hi",70]
o.greet = function() {console.log("hello")}
//otherthan primitive type everything else is object

console.log(JSON.stringify(o))
//key ----string or number
//objects are stored in memory  y reference
//o,o2,o3 reference
//primitive are stored by value
const o2 = {}
o2["firstName"] = "harika"
const a = 'lastname'
o2[a] = "reddy"
// console.log(o2.a)
console.log(o2.lastname)
// console.log(o2[a])
const o3 = {
    firstName:"harika",
    lastname:"reddy",
    greet:function(){
        console.log("hi")
    },
    address: {
        street:"katnapali",
        number :"308"

    }

}
console.log(typeof o3) //object
console.log(typeof JSON.stringify(o3)) //stribng