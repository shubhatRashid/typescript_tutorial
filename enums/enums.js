// ENUMS
{
    // Enums represent a special class of group of constants
    // Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent,
    // or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
    // Example :
    var directions = void 0;
    (function (directions) {
        directions[directions["North"] = 0] = "North";
        directions[directions["East"] = 1] = "East";
        directions[directions["West"] = 2] = "West";
        directions[directions["South"] = 3] = "South";
    })(directions || (directions = {}));
    console.log(directions.South);
    // Numeric Enums follow series values i.e if one of them is given a numeric value, all below it will follow the 
    // series. String enums have to be initialised with values.
    var group = void 0;
    (function (group) {
        group["shubhat"] = "shubhat";
        group["tahir"] = "tahir";
        group["junaid"] = "junaid";
    })(group || (group = {}));
    console.log(group.tahir);
}
