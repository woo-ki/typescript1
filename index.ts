// null & undefined 체크 팁
const func = (a: string | undefined): void => {
    if(a && typeof a === 'string') {
        // a가 null 또는 undefined 일때는 if문 실행이 안됨 false 로 인식함 바로
        // 익숙하지 않으면 안쓰는게 나음 ㅇㅇ
    } else {

    }
}
func('a');

// 내로잉 할 수 있는 방법들
// typeof를 사용할 수 없는 케이스에는 in을 사용하자
interface Fish {
    swim: string
}
interface Bird {
    fly: string
}
const func2 = (animal: Fish | Bird): void => {
    if('swim' in animal) {
        console.log('물고기!');
    } else {
        console.log('새!');
    }
}
func2({swim: 'aaa'});

// in은 고유한 속성에만 활용할 수 있음 잇몸으로 떼우자(원래는 한가지 타입으로 만들겠지.. wheel과 color니까\
// 리터럴타입으로 고유한 값을 넣어주자
interface Car {
    wheel: '4개',
    color: string
}
interface Bike {
    wheel: '2개',
    color: string
}
const func3 = (x: Car | Bike) => {
    if(x.wheel === '4개') {
        console.log('차!');
    } else {
        console.log('오토바이!');
    }
}
func3({wheel: '4개', color: 'blue'});