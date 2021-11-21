// 함수 파라미터, 리턴값에도 타입지정이 가능함
var fn = function (x) {
    return x * 2;
};
fn(3);
// 함수에 리턴값이 없을경우 void타입
var fn2 = function (x) {
    console.log(x);
};
fn2(3);
// 파라미터 x가 있을수도 있고, 없을수도 있음 ( x: number | undefined )와 같은 형태로 만들어줌
var fn3 = function (x) {
    console.log(x);
};
fn3();
