// function MyName(){
//     console.log("R")
//     console.log("A")
//     console.log("J")
//     console.log("E")
//     console.log("S")
//     console.log("H")
// }

// MyName()

function Addnumbers(num1, num2){
    console.log(num1+num2)
}
// Addnumbers(3,4)7

function Addnumber(num1, num2){
    let result=num1+num2
    return result
}
const result=Addnumber(12,34)
// console.log(result)46

function Addnumber2(num1, num2){
    return num1+num2   
}
const result2=Addnumber(26,34)
// console.log(result2)


function IsloggedIn(username){
    return `${username} is loggedIn`
}
//console.log(IsloggedIn())//undefined is loggedIn

function IsloggedIn(username){
    return `${username} is loggedIn`
}
//console.log(IsloggedIn(""))// is loggedIn

function IsloggedIn(username){
    return `${username} is loggedIn`
}
//console.log(IsloggedIn("rajesh"))//rajesh is loggedIn


function IsloggedIn(username){
    if(username==undefined)
    {
        console.log("Please enter the username")
    }
    return `${username} is loggedIn`
}
//console.log(IsloggedIn())//Please enter the username undefined is loggedIn
