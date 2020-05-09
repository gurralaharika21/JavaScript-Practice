const o = {
    a:"b", //values
    b:"b",
    obj: {
        keys:"keys",
    }
,
}
//use of our own functions to reduce the complexity or to be as our wish

const o2 = o

o2.a = "new value"
console.log(o.a)

const o3 = Object.assign({},o)
// o3.a = "im new"
console.log(o2.a)

function deepCopy(obj) {
    const keys = Object.keys[obj]
    const newObject = {}
for(let i = 0; i <keys.length;i++) {
    const key = keys[i]
    if(typeof obj[key] === 'object') {
        // newObject(key) = deepCopy(obj.(key))
    }
}

}