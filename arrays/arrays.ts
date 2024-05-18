// SYNTAX
{
    const numbers:number[] = [] // first syntax
    
    const numbers2:Array<number> = []  // second type syntax

    // custom type
    type user = {
        name : string,
        email : string,
        age : number
    }

    let allusers : user[] = []
    allusers.push({
        name:'shubhat',
        email : 'a@b.com',
        age : 25
    })
    console.log(allusers)
}