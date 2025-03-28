function number(num){
    return num
}

// console.log(number(200,300,400))//200

function number(...num){
    return num
}

//console.log(number(200,300,400))//[ 200, 300, 400 ]




function number(val1,val2,...num){
    return num
}

//console.log(number(200,300,400,5000,560000))//[ 400, 5000, 560000 ] because 200 value is assigned to val1, and 300 value is assigned to val2



const details={
    name:"JS",
    price:600000
}

function arraydetails(anyobject){
    return `subject is ${anyobject.name}, And the price of the subject is ${anyobject.price}`
}

//console.log(arraydetails(details))//subject is JS, And the price of the subject is 600000

const detail={
    name:"JS",
    prices:600000
}

function arraydetails(anyobject){
    return `subject is ${anyobject.name}, And the price of the subject is ${anyobject.price}`
}

//console.log(arraydetails(detail))//subject is JS, And the price of the subject is undefined


