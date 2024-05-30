// GENERICS
    // {
    //     /* suppose we need to create a function which accepts type of data and return same type of data 
    //     we could do something  like :
    //     */

    //     function identity(data:string):string{
    //         return data
    //     }

    //     /*
    //     This however only takes one type of data i.e string what if our data is dynamic
    //     We could do something like :
    //     */

    //     function identity2(data:string | boolean | number):string | boolean | number{
    //         return data
    //     }

    //     function identity3(data:any):any{
    //         return data
    //     }

    //     /* 
    //     This however doesnot give any specific information about output as it can be any of the three
    //     and if there are more types of data it would elongate the code.We cannot use 'any' due to similar reasone.
    //     This is where type generics is used :
    //     */

    //     function identity4<newType>(data:newType):newType{
    //         return data
    //     }
    //     console.log(identity4<string>('hello')) // works as string type for input and output
    // }

// GENERICS IN ARRAYS AND ARROW FUNCTIONS
    // {   
    //     // Syntax for arrow functions
    //     const identity = <T>(val:T):T => {return val} 

    //     // Syntax for arrays
    //     function identity2<T,>(data:T[]) : T[] // The comma in <T,> is generally used to differentiate b/w html tag or react component and generic type
    //     {
    //         return data
    //     }
    //     console.log(typeof identity2([1,2,3,4]))
    // }