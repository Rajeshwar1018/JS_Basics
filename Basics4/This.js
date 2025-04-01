const user={
    name:"rajesh",
    salary:45000,

    output: function(user){
        console.log(`hello ${this.name}, ur salary is ${this.salary}`) 
        console.log(this)
        // hello rajesh, ur salary is 45000
        // { name: 'rajesh', salary: 45000, output: [Function: output] }
        // hello rajeshwar, ur salary is 45000
        // { name: 'rajeshwar', salary: 45000, output: [Function: output] }
    }
}
//user.output()//hello rajesh, ur salary is 45000
user.name="rajeshwar"
//user.output()//hello rajesh, ur salary is 45000



const addTwo=(n1, n2)=>{
    return n1+n2
}
//console.log(addTwo(16,36))//52


//const addTwo1=(n1, n2)=>n1 + n2

const addTwo1=(n1, n2)=>(n1 + n2)
console.log(addTwo(32,36))//68

