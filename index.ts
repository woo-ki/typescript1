// 원하는 타입을 지정하는 제네릭 타입
// 내로잉을 대신할 수 있음
// <T1, T2> 등 여러개 동시에 사용할 수 있음
const func = <T>(x: T[]): T => {
    return x[0]
}

const a = func<number>([4, 2]);
const b = func<string>(['4', '2']);
console.log(a);
console.log(b);

// extends를 통해서 제네릭 제한두기
interface LengthCheck {
    length: number
}
const func2 = <T extends LengthCheck>(x: T): number => {
    return x.length;
}

const c = func2<string>('100');
console.log(c);


// (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
// 연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요
//
// (동작 예시)
// 함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다.
// 함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다.
interface Homework1 {
    length: number
}
const homework1 = <T extends Homework1>(x: T) => {
    console.log(x.length);
}
homework1<string>('hello');
homework1<string[]>( ['kim', 'park'] );

// (숙제2) Animal 이라는 타입이 있습니다.
// interface Animal {
//     name : string;
//     age : number
// }
// let data = '{"name" : "dog", "age" : 1 }'
// 그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.
// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
// 오늘 배운 Generic을 이용해서 구현해보도록 합시다.
//
// (동작 예시)
// 함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임
interface Animal {
    name : string;
    age : number
}

let data = '{"name" : "dog", "age" : 1 }';
const homework2 = <T>(x: string): T => {
    return JSON.parse(x);
}
console.log(homework2<Animal>(data));


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
class Person<T> {
    name: T;
    constructor(a: T){
        this.name = a;
    }
}
let person = new Person('어쩌구');
console.log(person.name) //any 타입이 되었넹