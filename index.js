// null & undefined 체크 팁
var func = function (a) {
    if (a && typeof a === 'string') {
        // a가 null 또는 undefined 일때는 if문 실행이 안됨 false 로 인식함 바로
        // 익숙하지 않으면 안쓰는게 나음 ㅇㅇ
    }
    else {
    }
};
func('a');
var func2 = function (animal) {
    if ('swim' in animal) {
        console.log('물고기!');
    }
    else {
        console.log('새!');
    }
};
func2({ swim: 'aaa' });
var func3 = function (x) {
    if (x.wheel === '4개') {
        console.log('차!');
    }
    else {
        console.log('오토바이!');
    }
};
func3({ wheel: '4개', color: 'blue' });
