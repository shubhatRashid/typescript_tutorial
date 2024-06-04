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

// INSTANCE_OF AND TYPE PREDICATES :
    {
        // InstanceOf is like typeOf but it is used with objects which can be created using new keyword
        // e.g Date, Array etc
        function logValue(x: Date | string) {
            if (x instanceof Date) {
              console.log(x.toUTCString());
            } else {
              console.log(x.toUpperCase());
            }
          }
    }