

let firstName:string = "Atul";

let n: number = 10

if(n>2){
    n += 10
}


// functions 

function calculateSum(num1:number,num2: number):number{
    let sum: number = num1 + num2;

    return sum;
}
let calculatedSum=calculateSum(100,200);
console.log(calculatedSum);


// objects 
type User ={
    id : number,
    email:string,
    password:string,
    expire: (date:Date) => void

}

let user:User= {
    id: 1,
    email: "atul@gmail.com",
    password: "system123#",
    expire:(date:Date)=> {
        console.log(date)
    
    }
}

let date:Date= new Date();
user.expire(date);



// let user:{
    // id : number,
    // email:string,
    // password:string,
    // expire: (date:Date) => void
// } = {
//     id: 1,
//     email: "atul@gmail.com",
//     password: "system123#",
//     expire:(date:Date)=> {
//         console.log(date)
    
//     }
// }

// let date:Date= new Date();
// user.expire(date);



