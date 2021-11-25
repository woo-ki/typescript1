var rect = { color: 'red', width: 100 };
console.log(rect);
var square = {
    color: 'blue',
    width: 50
};
console.log(square);
var student = { name: 'kim' };
var teacher = { name: 'kim', age: 37, score: 100 };
console.log(student);
console.log(teacher);
var product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
console.log(product);
var cart = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
console.log(cart);
var cart2 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800, card: true }];
console.log(cart2);
var methods = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
console.log(methods.plus(5, 3));
console.log(methods.minus(5, 3));
