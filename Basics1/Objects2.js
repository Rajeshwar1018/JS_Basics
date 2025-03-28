const details={
    name:"rajesh",
    age:"22",
    workDuring:"unemployed"
}

const {name}=details

// console.log(name)

const detail={
    name:{        
        fname:"rajesh",
        lname:"guddeti"       
    },
    age:"22",
    work:"unemployed"
}

const {name:{fname, lname}}=detail

// console.log(fname)
// console.log(lname)

const {workDuring:work}=details
console.log(work)

//-----------JavaScript Object Notation---------------------//
{
    "name":"dinesh",
    "age":"23",
    "work":"unemployed"
}


