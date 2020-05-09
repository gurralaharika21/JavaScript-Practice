

function addOne(num) {
    console.log("inside fn addone")
    throw new Error("oh no, an error")
}


function getNum() {
    console.log("inside fn getnum")
    return addOne(10)
}

function c() {
    try{
        console.log("inside fn c")
    console.log(getNum() + getNum())
    }
    catch(error) {
        console.log(error.message);
    }
}
c()