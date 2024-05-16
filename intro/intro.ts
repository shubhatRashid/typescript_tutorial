// GOOD ERRORS :
    // {
    //     var user = {
    //         name:'shubhat rashid',
    //         age : 20
    //     }
    //     console.log(user.email) // gives undefined on js but error on ts
    // }

// DECLEARING TYPE IN TS :
    // {
    //     let myName:string
    //     myName = 'shubhat rashid' 
    //     console.log(myName) // this gives 'shubhat' as output

    //     // myName = 12345   // this gives error as string cant be a number
    //     // console.log(myName)
        
    //     // another way is :
    //     let firstName:string = 'shubhat'
    //     console.log(firstName)

    //     // numbers :
    //     let userId : number = 33802145
    //     console.log(userId)
    //     // ts doesnot have int and float , both are just number.

    //     // boolean :
    //     let isLoggedIn : boolean = false

    //     // Type inferance :
    //         // the above decleration can be simplified as 
    //         let myAge = 20 
    //         // typescript is built to detect types of them using their values
    //         // if we are just declearing variable then it is better to declear their type also
    //         // their default type would be set as 'any'.

    // }

