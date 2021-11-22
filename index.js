var func = function (x) {
    return Number(x);
};
func('3');
var member = {
    name: 'kim',
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        this.name = 'wooki';
    }
};
console.log(member.plusOne(2));
console.log(member);
member.changeName();
console.log(member);
var cutZero = function (x) {
    var target = x.charAt(0);
    if (target === '0') {
        return x.substring(1);
    }
    else {
        return x;
    }
};
console.log(cutZero('0aax0'));
console.log(cutZero('adfsa'));
var removeDash = function (x) {
    var temp = x.replace(/-/g, '');
    var result = Number(temp);
    if (isNaN(result)) {
        return -1;
    }
    else {
        return result;
    }
};
console.log(removeDash('1as-'));
console.log(removeDash('1-1-1--'));
var finalFunc = function (x, func1, func2) {
    var temp = func1(x);
    var result = func2(temp);
    console.log(result);
};
finalFunc('010-1111-2222', cutZero, removeDash);
