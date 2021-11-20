// 두 개 이상의 타입을 주고싶을 때 쓰는 유니온 타입
let user: (number | string) = 123;
user = 'kim';
user = 11231;

// 유니온 타입을 활용한 다중 데이터 배열
let users: (number | string)[] = [1, '22', 34, 'adfad'];

// 유니온 타입을 활용한 다중 데이터 오브젝트
let obj: {a: (number | string)} = {a: 2};
obj.a = 'asds';
obj.a = 123;

// 아무 데이터나 받을 수 있는 any 타입(타입스크립트를 쓰는 이유가 없어짐 지양할것)
let anyData: any;
anyData = 'aaa';
anyData = 131;
anyData = [1,3,4];

// any와 같이 아무거나 입력 가능한 unknown 타입(any보다는 낫지만 그래도 지양하자)
let unknownData: unknown;
unknownData = 'asadasd';
unknownData = 1313;

// any와 unknown의 차이 any는 타입스크립트 자체를 무효화 시키기 때문에 다른곳에서 활용할 때 활용하는 공간에 지정된 변수 타입조차 무시함
// let testData1: string = unknownData; // 에러 발생
// let testData2: string = anyData;     // 에러 안남

// 타입스크립트는 유니온타입 포함 모든 타입중 오직 number, bigint등 숫자와 관련된 타입에만 연산이 가능함.
let age: (string | number);
// age++;

// Q1. 변수 타입지정
// let userQ = 'kim';
// let ageQ = undefined;
// let marriedQ = false;
// let 철수Q = [user, age, married];
// (조건) ageQ 변수엔 undefined 말고 숫자도 들어올 수 있습니다.

let userQ: string = 'kim';
let ageQ: (undefined | number) = undefined;
let marriedQ: boolean = false;
// let 철수Q: [string, (undefined | number), boolean] = [userQ, ageQ, marriedQ];
let 철수Q: (string | undefined | number | boolean)[] = [userQ, ageQ, marriedQ];

// Q2. 학교라는 변수에 타입지정해보십시오.
// let 학교 = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]

let 학교: {score: (number | boolean)[], teacher: string, friend: (string | string[])} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]