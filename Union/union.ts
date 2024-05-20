// UNION : COMBINING TWO OR MORE TYPES TO FORM NEW ONE

// SYNTAX
    // {
    //     let apiResponse : string | number  // deals with a situation where we may recieve data in numbers or an error message
    //     apiResponse = 77
    //     apiResponse = "88"

    //     console.log(apiResponse)
    // } 

// UNION IN FUNCTIONS
    // {
    //     function hello(arg :string|number){
    //         // arg.toUpperCase() gives error as it is not clear at this point if arg is string or number
    //         // arg += 2 also not allowed
    //         // no method related to numbers or string can be directly applied so we have to do a strict check first
    //         if (typeof arg === 'string'){
    //             return arg.toLocaleUpperCase()
    //         } 

    //         if (typeof arg === 'number'){
    //             return arg += 5
    //         } 
    //     }

    //     console.log(hello(5))
    //     console.log(hello('shubhat'))
    // }

// UNION IN ARRAYS
    // {
    //     // let alphabetsAndnums:string = ['a','b','c',6]                // gives error
    //     // let alphabetsAndnums: string[] | number[] = ['a','b','c',6]  // wrong syntax as it specifies either a full array of strings or a
    //     //                                                                 full array of numbers and not union of them

    //     let alphabetsAndnums:(string | number )[] = ['a','b','c',6]     // right syntax for union in arrays
    //     console.log(alphabetsAndnums)
    // }