// ENUMS
{
    // Enums represent a special class of group of constants
    // Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent,
    // or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
    // Example :
    enum directions {
        North,
        East,
        West,
        South
    }
    console.log(directions.South)
    // Numeric Enums follow series values i.e if one of them is given a numeric value, all below it will follow the 
    // series. String enums have to be initialised with values.

    enum group {
        shubhat = 'shubhat',
        tahir = 'tahir',
        junaid = 'junaid'
    }
    console.log(group.tahir)
}

