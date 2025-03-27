const details=new Object()

details.name="sanju"
details.age=28
details.salary=150000
details.relation="married"
details.company="infosys"

// console.log(details)


const anotherdetails={
    email:"rajesh@gmail.com",
    name:{
        fullname:{
            firstname:"rajesh",
            lastname:"guddeti"
        }
    }
}

// console.log(anotherdetails)
console.log(anotherdetails.name.fullname.firstname)

const obj1={"a":1, "b":2}
const obj2={"c":3, "d":4}

// console.log(obj1,obj2)

// const obj3=Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj4={...obj1,...obj2}
// console.log(obj4)

console.log(Object.keys(details))
console.log(Object.values(details))
console.log(Object.entries(details))





