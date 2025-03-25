
//------------Stack-------------
let s=100
const s1=s
s=200

console.log(s)//200
console.log(s1)//100

//-----------Heap----------------

let userOne={
    name:"rajesh",
    age:20
}

let userTwo=userOne

console.log(userOne)
console.log(userTwo)

userTwo.name="Sanju"

console.log(userOne)
console.log(userTwo)



