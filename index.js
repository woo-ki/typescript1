var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest parameter 파라미터가 몇개일지 모를 때 사용
var func = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
};
func(1, 2, 3, 4, 56, 67, 65, 54, 4, 23, 2);
// spread operator 배열, 오브젝트의 내용물만 추출
var arr = [1, 2, 3];
var arr2 = ['4', '5'];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
// destructuring 활용해서 배열과 오브젝트 안에있는 항목을 바로 변수에 할당
var arr4 = [1, 2];
var a = arr4[0], b = arr4[1];
console.log(a);
console.log(b);
var _a = { student: true, age: 20 }, student = _a.student, age = _a.age;
console.log(student);
console.log(age);
var obj = { student: true, age: 20 };
var func2 = function (_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
};
func2(obj);
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
var homework = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    });
};
console.log(homework(6, 30, 7, 2));
var homework2 = function (_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user);
    console.log(comment);
    console.log(admin);
};
homework2({ user: 'kim', comment: [3, 5, 4], admin: false });
// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
var homework3 = function (_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
};
homework3([40, 'wine', false]);
