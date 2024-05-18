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
    // {
    //     function giveGreetings(user:string='user'):string {
    //         return `Hello ,Good Morning ${user}`
    //     }

    //     console.log(giveGreetings('shubhat'))
    // }

// Multiple types
    // {
    //     function check(input:string | number):boolean | number{
    //         if(typeof(input) === 'string'){
    //             return true
    //         }else{
    //             return 200
    //         }
    //     }
    //     console.log(check(1234))
    // }

// Error Handling functions
    // {
    //     function handleError(message:string):never{
    //         throw new Error(message)
    //     }
    //     // such function are not expected to return anything and hence 'never' should be used
    // }

// Void return
    // {
    //     function logOnConsole(message:string):void{
    //         console.log(message)
    //     }
    // }