function recurse() {
    console.log("recursion")
    return recurse()
}

recurse() //stack overflow occurs without base case