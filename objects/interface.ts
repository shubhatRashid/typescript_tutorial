// Interface :
    {
        // just like type alias we also have interface however their are differences between them
        interface User {
            name : string,
            email: string,
            nickName ? : string,
            age : number
            otp : () => number // can also be written as otp():number which is just specifying a function with number type return
            coupon? :(couponName:string) => number
        }
        const user:User ={
            name:'shubhat',
            email:'a@b.com',
            age : 25,
            otp:() => 12345,
            coupon:(couponName='shubhat') => 20
        }
        // interface can take new properties without touching the original decleration i.e
        interface User {
            address? : string
        }

        const user2:User ={
            name:'shubhat',
            email:'a@b.com',
            age : 25,
            otp:() => 12345,
            coupon:(couponName='shubhat') => 20,
            address : 'jandk'
        }

        // extending an interface : a new interface can take all types of previous interfaces using extends keyword 
        interface admin extends User  {
            isAdmin : boolean
        }

        const user3:admin ={
            isAdmin: true,
            name:'shubhat',
            email:'a@b.com',
            age : 25,
            otp:() => 12345,
            coupon:(couponName='shubhat') => 20,
            address : 'jandk'
        }
        console.log(user)
        console.log(user2)
        console.log(user3)
    }
