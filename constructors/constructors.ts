// BASIC SYNTAX
// {   
//     class User {
//         name : string
//         email : string
//         readonly password : string | number = 'hello'
//         constructor(name:string,email:string){
//             this.name = name,
//             this.email = email
//         }
//         }
//         const user = new User('shubhat','a@b')
//         user.name = 'rashid shubhat'
//         console.log(user.password)
// }

// PRIVATE AND PUBLIC
// {
//     class User {
//         public name : string // by default name would be public so mentioning it is useless
//         public email : string // same as above
//         private password:string|number // private variable only accessible inside class decleration and not outside
//         constructor(name:string,email:string){
//             this.name = name,
//             this.email = email
//         }
//     }
// }

// ALTERNATE SYNTAX
// {
//     class User {
//         private password:string|number
//         constructor(public name:string, public email:string){
//             this.name = name,
//             this.email = email
//         }
//     }
// }

// GETTERS AND SETTERS
// {
//     // Using dot notation to get and set a property doesnot use any validation for data
//     // getters and setters are used to get and modify data according to some rules set inside 
//     // these functions.
//     // Getters and setters allow encapsulation.
//     // Even private variables can  be accessed and set using getters and setters but we can define how we want to show them
//     class User{
//         private password : number
//         constructor(public name:string,public email:string){
//             this.name = name
//             this.email = email
//         }

//         get getPassword():number {
//             return this.password
//         }

//         set setPassword(newPassword:number){
//             this.password = newPassword
//         }
//     }

//     let user = new User('shubhat','a@b.com')
//     user.setPassword = 123456789
//     console.log(user.getPassword)
// }