let parts =[1,2,3] // compiler knows the type bcoz of same of values

let nums = [] // type is any bcoz implicit definition
nums[0] = 1;
nums[1] = "one"; 


let nums1: number[] = [] // right way to use typescript array
nums1[0] = 1 ;
// nums1[1]  = "one"  // will give error explicit types // not allowed

console.log(nums)
