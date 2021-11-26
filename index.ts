// never타입을 함수에 사용하는 경우
// return값이 없어야함
// 함수가 끝나지 않아야함
// 무한루프(while true) or 에러 던지기
const func = (): never => {
    // throw new Error();
    while (true) {

    }
}

// 실제 사용하는 케이스 사실 없음
// 거의 안 씀 void로 대체함
// 이상하게 코드를 짜면 never가 튀어나와서 알아야함
const func2 = (param: string) => {
    if(typeof param === 'string') {
        console.log(param);
    } else {
        // 존재할 수 없는 타입인데 만들어서 never가 나와버림
        console.log(param);
    }
}