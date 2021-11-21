// literal type 원하는 문자열, 숫자같은 특정 값만 입력 가능하게 만들어주는 방법
let introduce: 'wooki' | 29;
introduce = 'wooki';

const fn = (x: 'hello'):(1 | 0) => {
    console.log(x);
    return 1;
}
fn('hello');

// 가위바위보 머신 만들기
type RockPaperScissors = '가위' | '바위' | '보';
const rockPaperScissors = (x: RockPaperScissors): void => {
    const arr: string[] = ['가위', '바위', '보']
    const you: number = arr.indexOf(x);
    const com: number = Math.floor(Math.random() * 3);
    console.log(`You: ${x}`);
    console.log(`Com: ${arr[com]}`);
    switch (you - com) {
        case 0:
            console.log('비겼습니다!'); break;
        case 1:
        case -2:
            console.log('이겼습니다!👍'); break;
        case -1:
        case 2:
            console.log('졌습니다...😢'); break;
        default:
            break;
    }
}
rockPaperScissors('보');

// 리터럴 타입의 문제 data.name 은 'kim'이라는 타입이 아니기 때문에 문제발생
// data를 선언할 때 타입 부여하기
// 또는 {name: 'kim'}뒤에  as const 붙여주기
// 오브젝트 키값의 타입을 밸류로 고정시켜주는 문법
// + readonly 속성을 강제로 부여하는 문법
let data = {
    name: 'kim'
}
console.log(data);
const myFn = (x: 'kim') => {
    console.log(x);
}
myFn('kim');
// myFn(data.name);