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
// FUNCTION TRYING TO GET PROPERTIES OF AN OBJECT WITH PROPER TYPES
// {
//     interface database {
//         connection : string,
//         data : object,
//         id : number
//     }
//     function temp<T,U extends database>(obj:T,data:U):object{
//         return {}
//     }
//     // This represents a function which takes an object with protocol as database as input
//     // and a value which is just like obj and returns an object
//     function temp2<T,U extends keyof database>(obj:T,data:U):U{
//         return data
//     }
//     // This represents a function which takes an object with protocol as database as input
//     // and a value which is a property of  obj and returns an data of type which is also form database
// }
// GENERIC CLASSES
{
    // We need a class that can take both the interfaces and add them to cart
    var Sellible = /** @class */ (function () {
        function Sellible() {
            this.cart = [];
        }
        Sellible.prototype.addToCart = function (product) {
            this.cart.push(product);
        };
        Sellible.prototype.fetchCart = function () {
            return this.cart;
        };
        return Sellible;
    }());
    var myStore = new Sellible();
    myStore.addToCart({
        title: 'new book',
        issueDate: 2024,
        pages: 100,
        author: 'me'
    });
    console.log(myStore.fetchCart());
}
