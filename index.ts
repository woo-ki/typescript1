// 메소드에 타입을 커스텀해서 만드는 방법
type FuncType = (x: string) => number;

const func: FuncType = (x) => {
    return Number(x);
}
func('3');

// 오브젝트 내부의 메소드에 메소드타입 지정하는 방법
type FuncType2 = (x: number) => number;
type FuncType3 = () => void;
type MemberType = {
    name: string,
    plusOne: FuncType2,
    changeName: FuncType3
}
const member:MemberType = {
    name: 'kim',
    plusOne: (x) => {
        return x + 1
    },
    changeName() {
        this.name = 'wooki';
    }
}
console.log(member.plusOne(2));
console.log(member);
member.changeName();
console.log(member);

// (숙제1) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.
type CutZeroType = (x: string) => string
const cutZero: CutZeroType = (x) => {
    const target = x.charAt(0);
    if(target === '0') {
        return x.substring(1);
    } else {
        return x;
    }
}
console.log(cutZero('0aax0'));
console.log(cutZero('adfsa'));

type RemoveDashType = (x: string) => number
const removeDash: RemoveDashType = (x) => {
    const temp = x.replace(/-/g, '');
    const result = Number(temp);
    if(isNaN(result)) {
        return -1;
    } else {
        return result;
    }
}
console.log(removeDash('1as-'));
console.log(removeDash('1-1-1--'));

// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
// ex ) 만들함수('010-1111-2222', cutZero, removeDash)
type FinalFuncType = (x: string, func1: CutZeroType, func2: RemoveDashType) => void;
const finalFunc: FinalFuncType = (x, func1, func2) => {
    const temp = func1(x);
    const result = func2(temp);
    console.log(result);
}
finalFunc('010-1111-2222', cutZero, removeDash);