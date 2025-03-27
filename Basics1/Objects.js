const sym=Symbol("key1")

const JSuser={
    name:"rajeshwar",
    "full name":"rajeshwar guddeti",
    sym:"keys2",
    age: 22,
    email:"rajesh@gmail.com",
    isLoggedIn: true,
    Assigned:"none"

}

// console.log(JSuser)
// console.log(JSuser.email)
// console.log(JSuser["full name"])
// console.log(JSuser["sym"])


// JSuser.email="rajeshwar@gmail.com"
// console.log(JSuser["email"])


// Object.freeze(JSuser)

// JSuser.email="raj@gmail.com"
// console.log(JSuser["email"])

JSuser.greeting= function()
{
    console.log("Hello, Show me ur details")
}

// console.log(JSuser.greeting())

JSuser.greetingTwo= function()
{
    console.log(`Hello ${this.name}, Show me ur details`)
}

console.log(JSuser.greetingTwo())










