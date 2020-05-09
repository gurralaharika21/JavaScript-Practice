const sayHello = (
    function () {
    var message = "hello"
    function sayHello() {
        console.log(message)
    }
    return sayHello
}
)
();
// const sayHello = (console.log("hi"));
// console.log(sayHello) //undefined as it doesn't retunr
console.log(sayHello) //


