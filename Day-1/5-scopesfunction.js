//hoisted functoins

thisshouldwork()

console.log("typeof butnotthis:" + typeof butnotthis)

function thisshouldwork() {
    console.log("hoisted")
}
var butnotthis = function() {
    console.log("but variables aren't")
}
console.log("typeof butnotthis:" + typeof butnotthis)