class User {
    name : string
    public email : string
    private password : string | number = 'hello'
    constructor(name:string,email:string){
        this.name = name,
        this.email = email
    }
}
const user = new User('shubhat','a@b')
user.name = 'rashid shubhat'
// console.log(user.password) gives error as password is private and is accessible inside class only
// by default name is public 