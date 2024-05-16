// Regular functions
// {
//     function addTwoNums(num1:number,num2:number):number{
//         return num1+num2
//     }
//     console.log(addTwoNums(1,2))
// }
// Arrow Functions
// {
// const subtract = (num1:number,num2:number):number => {
//     return num1-num2
// }
// console.log(subtract(5,1))
// }
// Default Values
{
    function giveGreetings(user) {
        if (user === void 0) { user = 'user'; }
        return "Hello ,Good Morning ".concat(user);
    }
    console.log(giveGreetings('shubhat'));
}
