// Narrowing 문법 / 유니온타입등 정해진 타입이 아닌경우 케이스를 명확히 해줘야 함!(타입오브를 활용하는 방법)
// Narrowing 은 instanceof, in등 타입을 확정지을 수 있으면 가능하다.
// if를 썼으면 else if, else 등을 통해서 타입을 무조건 확정지어야 오류가 안난다.
var fn = function (x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
};
fn('d');
// assertion 문법 / 유니온타입인 경우에 한가지 타입으로 덮어씌워주는 기능임
// 무슨 타입이 들어올지 확실할때만 사용.
// x에 '134'이 들어가도 오류를 잡아주지 못함.
// 앵간하면 지양하자.(디버깅용, 비상용만 사용)
var fn2 = function (x) {
    var array = [];
    array.push(x);
    return array;
};
fn2(3);
// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
var q1 = function (x) {
    return x.map(function (t) { return Number(t); });
};
console.log(q1([1, '2', '3', '4', 6]));
// (숙제2) 다음과 같은 함수를 만들어보십시오.
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.
//
// (동작예시)
// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다
var q2 = function (x) {
    var result;
    var target = x.subject;
    if (typeof target === 'string') {
        result = target;
    }
    else {
        result = target[target.length - 1];
    }
    return result;
};
console.log(q2({ subject: 'math' }));
console.log(q2({ subject: ['science', 'art', 'korean'] }));
