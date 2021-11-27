// typescript는 public private protected static등의 키워드를 쓰게해줌
// public : 해당 키워드가 붙은것은 클래스의 모든 자식이 이용 가능 // 기본값이라 생략가능
// private : 클래스 내에서만 활용하고 외부에서는 조작 불가 // 내부에 변경하는 메소드를 만들어놓은 경우에만 해당 메소드를 통해서 변경 가능
// protected : private과 비슷하지만 extends한 자식 클래스에서도 사용할 수 있음(private은 불가능)
// static : 자식에게 부여되지 않고 부모 클래스를 직접 호출한 경우에만 사용할 수 있는 아이템(다른 3가지와 같이 사용할 수 있음)
class User {
    public name: string;
    private familyName: string = 'kim';
    protected  x: number = 10;
    static a: number = 10;
    public static b: number = 30;
    constructor(name: string) {
        this.name = `${name} ${this.familyName}`;
    }

    public changeFamilyName(x: string) {
        this.familyName = x;
    }
}
const user = new User('wooki');
user.changeFamilyName('kiim');
console.log(user);
console.log(User.a);
console.log(User.b);

class NewUser extends User {
    public test = (): void => {
        // console.log(this.familyName);
        console.log(this.x);
    }
}
const newUser = new NewUser('gg');
console.log(newUser)

// 생성자 파라미터에 public으로 입력할경우 해당 변수명에 자동으로 값 부여됨
class Person {
    constructor(public name: string, public test: string) {

    }
}
const person = new Person('kim', 'aaa');
console.log(person);

class User2 {
    static skill: string;
    intro: string;
    constructor(skill: string) {
        User2.skill = skill;
        this.intro = `${User2.skill} 전문가 입니다.`;
    }
}
const cheolsu = new User2('js');
console.log(cheolsu);

// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
// class User {
//     private static x = 10;
//     public static y = 20;
//     protected z = 30;
// }
// 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
// 친구가 물어봤을 때 어떻게 답해줄 것입니까

// x = 클래스 내부에서만 수정이 가능한 변수 + 호출하려면 User클래스 자체에서 꺼내야함(상속되지 않음)
// y = 호출시 User클래스 자체에서 꺼내서만 사용할 수 있음, 수정은 클래스 내부 외부 상관없이 가능함
// z = 클래스 내부에서만 사용, 수정이 가능한 변수 + 상속이 가능함

// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.

// class User {
//     private static x = 10;
//     public static y = 20;
// }
// User.addOne(3) //이렇게 하면 x가 3 더해져야함
// User.addOne(4) //이렇게 하면 x가 4 더해져야함
// User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
// 저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
// 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
// (조건) private static x = 10; 이 코드 수정금지
class Homework2 {
    private static x: number = 10;
    public static y: number = 20;

    static addOne = (x: number): void => {
        Homework2.x += x;
    }
    static printX = (): void => {
        console.log(Homework2.x)
    }
}
Homework2.addOne(3);
Homework2.addOne(4);
Homework2.printX();

// (숙제3) 이런거 어떻게 만들게요
// 웹 요소 애니메이팅하는거 이런 것의 기초 격인데
// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw = (): void => {
        const maxW: number = 400 - this.width + 1;
        const maxH: number = 400 - this.height + 1;
        let left: number, top: number;
        left = Math.floor(Math.random() * maxW);
        top = Math.floor(Math.random() * maxH);
        const target = document.getElementById('square_box');
        const div = document.createElement('div');
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.style.background = this.color;
        div.style.position = 'absolute';
        div.style.left = `${left}px`;
        div.style.top = `${top}px`;
        target instanceof HTMLElement ? target.appendChild(div) : null;
    }
}
const square = new Square(30, 30, 'red');
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();