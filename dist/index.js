"use strict";
let firstName = "Atul";
let n = 10;
if (n > 2) {
    n += 10;
}
// functions 
function calculateSum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let calculatedSum = calculateSum(100, 200);
console.log(calculatedSum);
let user = {
    id: 1,
    email: "atul@gmail.com",
    password: "system123#",
    expire: (date) => {
        console.log(date);
    }
};
let date = new Date();
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
function usdToInr(amount) {
    if (typeof amount === "number")
        return amount * 81;
    else
        return parseInt(amount) * 81;
}
console.log(usdToInr(1897));
//# sourceMappingURL=index.js.map