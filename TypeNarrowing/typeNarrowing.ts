// NOTES :
/*
    1) Use typeOf operator to check type of an input keep it correct branch
    2) Specifically check for falsy values as their typeOf may return something unexpected.
        e.g typeOf null = object and hence may lead to errors
        falsy values :
        0
        NaN
        "" (the empty string)
        0n (the bigint version of zero)
        null
        undefined
    3) If there are multiple types of interfaces being used in a function, Use in operator to check
        if a specific property exists in current input.

 */

// INSTANCE_OF:
    // {
    //     // InstanceOf is like typeOf but it is used with objects which can be created using new keyword
    //     // e.g Date, Array etc
    //     function logValue(x: Date | string) {
    //         if (x instanceof Date) {
    //           console.log(x.toUTCString());
    //         } else {
    //           console.log(x.toUpperCase());
    //         }
    //       }

        
    // }

// TYPE PREDICATES 
    // {
    //     type Fish = {swim:()=>void}
    //     type Bird = {fly:()=>void}

    //     // checkTypes Using functions
    //     function isFish(pet:Fish | Bird):pet is Fish{
    //         return (pet as Fish).swim() !== undefined
    //     }

    //     let res = isFish({swim:()=>true})
    //     console.log(res)
    // }


// Discrimnated Union
    {
        interface Square  {
            kind : 'square',
            side : number,
            getArea : (sideLength : number) =>number
        }

        interface Circle  {
            kind : 'circle',
            radius : number,
            getArea : (sideLength : number) =>number
        }

        type Shape = Square | Circle

        function getAreaOfShape (shape:Shape):number{
            if (shape.kind === 'circle'){
                return shape.radius * Math.PI * shape.radius
            }else{
                return shape.side**2
            }
        }
        // The property 'kind' is called discripnating property and union between such types having common property is 
        // discrimnated union . This is used by typeScript to narrow down members of the union
    }