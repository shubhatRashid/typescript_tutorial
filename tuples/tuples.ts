// TUPLES :
    {
        // Tuples are a data structure which is well ordered and immutable
        // In python tuples are represented as mytuple = ('a',1,true)
        // indexing and slicing can be done on tuples in python
        // functions like length,index can  be used on them
        // there are no tuples in js but typescript restrictions let us use tuples in ts
    }

// Tuples in TypeScript : syntax
    {
        let rgb : [number,number,number] = [99,100,101]
        // here rgb is the tuple

        let data : [string,number,boolean] = ['shubhat',25,true] 
        // data = [29,'rashid',false]      // gives error as order of the types is necessary

        data[1] = 27 // allowed in ts
        // tuples in typescript are mutable for their values and not types
        // we can make them immutable using readonly

        type mytupleType = readonly [string,number,boolean] 
        let mytuple:mytupleType = ['hello',100,true]
        // mytuple[2] = false          // not allowed now
        // mytuple.push('hello')       // not allowed now
    }