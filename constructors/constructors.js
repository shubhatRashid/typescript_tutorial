var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name,
            this.email = email;
    }
    return User;
}());
var user = new User('shubhat', 'a@b');
user.name = 'rashid shubhat';
console.log(user.password);
