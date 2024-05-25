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