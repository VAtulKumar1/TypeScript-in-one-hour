

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


//  union type

function usdToInr(amount: number|string):number{
    if(typeof amount === "number")
        return amount*81;
    else
        return parseInt(amount)*81;

}

console.log(usdToInr(1897));

//  literal types

type Qunatity = 100 | 200;
let qunatity: Qunatity = 200;

type Metric = "cm" | "in";
let metric:Metric = "cm"; 


// null types

function sayHello(name:string | null | undefined){
    if(name)
        console.log(name.toLocaleLowerCase());
    else
        console.log("Hello");
        
    
}

console.log(sayHello(null));
