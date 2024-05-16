// GOOD ERRORS :
// {
//     var user = {
//         name:'shubhat rashid',
//         age : 20
//     }
//     console.log(user.email) // gives undefined on js but error on ts
// }
// DECLEARING TYPE IN TS :
{
    var myName = void 0;
    myName = 'shubhat rashid';
    console.log(myName); // this gives 'shubhat' as output
    // myName = 12345   // this gives error as string cant be a number
    // console.log(myName)
    // another way is :
    var firstName = 'shubhat';
    console.log(firstName);
}
