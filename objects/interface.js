// Interface :
{
    var user = {
        name: 'shubhat',
        email: 'a@b.com',
        age: 25,
        otp: function () { return 12345; },
        coupon: function (couponName) {
            if (couponName === void 0) { couponName = 'shubhat'; }
            return 20;
        }
    };
    var user2 = {
        name: 'shubhat',
        email: 'a@b.com',
        age: 25,
        otp: function () { return 12345; },
        coupon: function (couponName) {
            if (couponName === void 0) { couponName = 'shubhat'; }
            return 20;
        },
        address: 'jandk'
    };
    var user3 = {
        isAdmin: true,
        name: 'shubhat',
        email: 'a@b.com',
        age: 25,
        otp: function () { return 12345; },
        coupon: function (couponName) {
            if (couponName === void 0) { couponName = 'shubhat'; }
            return 20;
        },
        address: 'jandk'
    };
    console.log(user);
    console.log(user2);
    console.log(user3);
}
// Interface vs Type
{
}
