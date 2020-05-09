const firstName = "harika";//camelCase
const lastName = "reddy";
let fisrt = "gurrala" //newer
// var second = "gurram" //old key word
//follow coding conventions
//const constant----doesn't change
//let doesn't restrict,can change
//Dynamic typing
//typecasting----coercion
//flasy values --- evaluates to false
//truthy --- {}(objects);[array]
const x = 90;
const explicit = String(x);
const implicit = x + "";
console.log(typeof(x))

const arr = [
    "string",
    42,
    function() { console.log("hi")},
]

arr[2]()
// console.log(firstName)
// console.log(arr[1])

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}