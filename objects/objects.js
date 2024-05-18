// NORMAL OBJECTS
// {
//     const user = {
//         name: 'shubhat',
//         age : 25,
//     }
//     console.log(user)
// }
// OBJECTS WITH FUNCTIONS AS INPUTS
// {
//     function createUser({name:string,age:number}){}
//     // or using type alias or 'type' keyword
//     type User = {
//         firstName : string,
//         lastName : string,
//         age : number
//     }
//     function createUser2(user:User){}
// }
// OBJECTS WITH FUNCTIONS AS OUTPUT
// {
//     function createUser():{}{
//         return {}
//     }
//     // Here :{} represents the object output type for the function
//     // we can also specify what need to be inside the object
//     function createUser2():{name:string,age:number}{
//         return {name:'shubhat',age:25}
//     }
// }
// UNEXPECTED BEHAVIOR OF TS
// {
//     function createUser({name:string,age:number}){}
//     createUser({name:'shubhat',age:25,email:'shubhat@gmail.com'})
//     // function expects only two parameters inside the object and hence gives error on email property
//     const user = {name:'shubhat',age:25,email:'shubhat@gmail.com'}
//     createUser(user)
//     // doesnot give error and additional property can be passed
//     // this is the unexpected behavior of ts while using objects
// }
// READONLY AND OPTIONAL 
// {
//     // readonly and optional
//     type User = {
//         readonly id: number,  // 'readonly' specifies that id cannot be changes now
//         name:string,
//         age:number,
//         email?:string  // ? specifying that if email is present it should be a string 
//     }
//     const newUser: User = {
//         id : 123456,
//         name : 'shubhat',
//         age : 25
//     }
//     console.log(newUser) // works fine without email which is optional
//     newUser.id = 789456 // gives error as id is read only
// }
// TYPE COMBINATION
{
    var newCard = {
        cardName: 'new card',
        cardNumber: 12345
    };
    console.log(newCard);
}
