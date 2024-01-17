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
// objects 
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
//# sourceMappingURL=index.js.map