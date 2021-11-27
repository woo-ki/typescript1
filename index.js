var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// typescript는 public private protected static등의 키워드를 쓰게해줌
// public : 해당 키워드가 붙은것은 클래스의 모든 자식이 이용 가능 // 기본값이라 생략가능
// private : 클래스 내에서만 활용하고 외부에서는 조작 불가 // 내부에 변경하는 메소드를 만들어놓은 경우에만 해당 메소드를 통해서 변경 가능
// protected : private과 비슷하지만 extends한 자식 클래스에서도 사용할 수 있음(private은 불가능)
// static : 자식에게 부여되지 않고 부모 클래스를 직접 호출한 경우에만 사용할 수 있는 아이템(다른 3가지와 같이 사용할 수 있음)
var User = /** @class */ (function () {
    function User(name) {
        this.familyName = 'kim';
        this.x = 10;
        this.name = "".concat(name, " ").concat(this.familyName);
    }
    User.prototype.changeFamilyName = function (x) {
        this.familyName = x;
    };
    User.a = 10;
    User.b = 30;
    return User;
}());
var user = new User('wooki');
user.changeFamilyName('kiim');
console.log(user);
console.log(User.a);
console.log(User.b);
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.test = function () {
            // console.log(this.familyName);
            console.log(_this.x);
        };
        return _this;
    }
    return NewUser;
}(User));
var newUser = new NewUser('gg');
console.log(newUser);
// 생성자 파라미터에 public으로 입력할경우 해당 변수명에 자동으로 값 부여됨
var Person = /** @class */ (function () {
    function Person(name, test) {
        this.name = name;
        this.test = test;
    }
    return Person;
}());
var person = new Person('kim', 'aaa');
console.log(person);
var User2 = /** @class */ (function () {
    function User2(skill) {
        User2.skill = skill;
        this.intro = "".concat(User2.skill, " \uC804\uBB38\uAC00 \uC785\uB2C8\uB2E4.");
    }
    return User2;
}());
var cheolsu = new User2('js');
console.log(cheolsu);
// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
// class User {
//     private static x = 10;
//     public static y = 20;
//     protected z = 30;
// }
// 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
// 친구가 물어봤을 때 어떻게 답해줄 것입니까
// x = 클래스 내부에서만 수정이 가능한 변수 + 호출하려면 User클래스 자체에서 꺼내야함(상속되지 않음)
// y = 호출시 User클래스 자체에서 꺼내서만 사용할 수 있음, 수정은 클래스 내부 외부 상관없이 가능함
// z = 클래스 내부에서만 사용, 수정이 가능한 변수 + 상속이 가능함
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
// class User {
//     private static x = 10;
//     public static y = 20;
// }
// User.addOne(3) //이렇게 하면 x가 3 더해져야함
// User.addOne(4) //이렇게 하면 x가 4 더해져야함
// User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
// 저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
// 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
// (조건) private static x = 10; 이 코드 수정금지
var Homework2 = /** @class */ (function () {
    function Homework2() {
    }
    Homework2.x = 10;
    Homework2.y = 20;
    Homework2.addOne = function (x) {
        Homework2.x += x;
    };
    Homework2.printX = function () {
        console.log(Homework2.x);
    };
    return Homework2;
}());
Homework2.addOne(3);
Homework2.addOne(4);
Homework2.printX();
// (숙제3) 이런거 어떻게 만들게요
// 웹 요소 애니메이팅하는거 이런 것의 기초 격인데
// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        var _this = this;
        this.draw = function () {
            var maxW = 400 - _this.width + 1;
            var maxH = 400 - _this.height + 1;
            var left, top;
            left = Math.floor(Math.random() * maxW);
            top = Math.floor(Math.random() * maxH);
            var target = document.getElementById('square_box');
            var div = document.createElement('div');
            div.style.width = "".concat(_this.width, "px");
            div.style.height = "".concat(_this.height, "px");
            div.style.background = _this.color;
            div.style.position = 'absolute';
            div.style.left = "".concat(left, "px");
            div.style.top = "".concat(top, "px");
            target instanceof HTMLElement ? target.appendChild(div) : null;
        };
        this.width = width;
        this.height = height;
        this.color = color;
    }
    return Square;
}());
var square = new Square(30, 30, 'red');
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
