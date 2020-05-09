function makeHelloFunction() {
    var message = "hello"
    function sayHello() {
        console.log(message)
        console.log('typeof message', typeof message)
    }
    return sayHello
    

}

const sayHello = makeHelloFunction()

console.log('typeof message', typeof message)

console.log(sayHello.toString())//actual function
sayHello()