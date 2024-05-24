class User {
    name : string
    email : string
    readonly password : string | number = 'hello'
    constructor(name:string,email:string){
        this.name = name,
        this.email = email
    }
}
const user = new User('shubhat','a@b')
user.name = 'rashid shubhat'
console.log(user.password)