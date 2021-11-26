// rest parameter 파라미터가 몇개일지 모를 때 사용
const func = (...args: number[]) => {
    console.log(args)
}
func(1,2,3,4,56,67,65,54,4,23,2);

// spread operator 배열, 오브젝트의 내용물만 추출
const arr: number[] = [1, 2, 3];
const arr2: string[] = ['4', '5'];
const arr3: (number | string)[] = [...arr, ...arr2];
console.log(arr3);

// destructuring 활용해서 배열과 오브젝트 안에있는 항목을 바로 변수에 할당
const arr4: number[] = [1, 2];
const [a, b] = arr4;
console.log(a);
console.log(b);
const {student, age} = {student: true, age: 20}
console.log(student);
console.log(age);

const obj = {student: true, age: 20}
const func2 = ({student, age}: {student: boolean, age: number}) => {
    console.log(student, age);
}
func2(obj);

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
const homework = (...args: number[]): number => {
    return args.reduce((a: number, b: number): number => {
        if(a > b) {
            return a;
        } else {
            return b;
        }
    });
}
console.log(homework(6, 30, 7, 2));

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
interface Homework2 {
    user: string,
    comment: number[],
    admin: boolean
}
const homework2 = ({user, comment, admin}: Homework2): void => {
    console.log(user);
    console.log(comment);
    console.log(admin);
}
homework2({user : 'kim', comment : [3,5,4], admin : false});

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
const homework3 = ([a, b, c]: (string | number | boolean)[]): void => {
    console.log(a, b, c);
}
homework3([40, 'wine', false]);