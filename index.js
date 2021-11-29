// 원하는 타입을 지정하는 제네릭 타입
// 내로잉을 대신할 수 있음
// <T1, T2> 등 여러개 동시에 사용할 수 있음
var func = function (x) {
    return x[0];
};
var a = func([4, 2]);
var b = func(['4', '2']);
console.log(a);
console.log(b);
var func2 = function (x) {
    return x.length;
};
var c = func2('100');
console.log(c);
var homework1 = function (x) {
    console.log(x.length);
};
homework1('hello');
homework1(['kim', 'park']);
var data = '{"name" : "dog", "age" : 1 }';
var homework2 = function (x) {
    return JSON.parse(x);
};
console.log(homework2(data));
// (숙제3) class 를 수정해봅시다.
// class Person {
//     name;
//     constructor(a){
//         this.name = a;
//     }
// }
// let a = new Person('어쩌구');
// a.name //any 타입이 되었넹
//
// 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
// 이게 싫어서 파라미터에 string을 집어넣으면 string 타입
// number를 집어넣으면 number 타입
// string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?
// 오늘 배운 Generic을 이용해봅시다.
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var person = new Person('어쩌구');
console.log(person.name); //any 타입이 되었넹
