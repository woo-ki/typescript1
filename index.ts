// 타입이 너무 길 경우 커스텀 타입(타입변수)을 활용하자(type alias)
// 타입 변수는 대문자로 시작하는게 관습
// 뒤에 type 을 붙여주는게 관습
type AnimalType = string | number | undefined;
let animal: AnimalType = 13413
console.log(animal);

type AnimalType2 = {
    name: string,
    age: number
}
let animal2: AnimalType2 = {
    name: '하마',
    age: 3
}
console.log(animal2)

// object와 array의 값을 수정할 수 없도록 막아주는 readonly 속성
type FriendType = {
    readonly name: string
}
const friend: FriendType = {
    name: '망할놈'
}
console.log(friend);

// 타입은 여러개를 합쳐서 만들 수 있음
// 단, 재정의는 불가능함
// 여러개의 타입을 | 로 or 조건으로 묶어주거나 object 같은 타입은 & 기호로 extend 해주기
type NameType = string;
type AgeType = number;
type PersonType = NameType | AgeType;
let person: PersonType = 13;
console.log(person);

type PositionXType = {x: number};
type PositionYType = {y: number};
type NewType = PositionXType & PositionYType;   // object 타입들의 extend
let position: NewType = {
    x: 134,
    y: 23
}
console.log(position);

// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type Q1_1 = {q1_1: number, q1_10: number};
type Q1_2 = {q1_2: number, q1_10: number};
type Q1_3 = Q1_1 & Q1_2;
let q1: Q1_3 = {
    q1_1: 1,
    q1_2: 2,
    q1_10: 10
};
console.log(q1);

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
type Q2 = {
    color?: string,
    size: number,
    readonly position: number[]
}
const q2: Q2 = {
    size: 10,
    position: [1, 3, 5]
}
console.log(q2);

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
type Q3 = {
    name: string,
    phone: number,
    email: string
}
const q3: Q3 = { name : 'kim', phone : 123, email : 'abc@naver.com' }
console.log(q3);

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
type Q4 = Q3 & {isAdult: boolean}
const q4: Q4 = {
    name: 'kim',
    phone: 13111,
    email: '134@242.44',
    isAdult: true
}
console.log(q4);