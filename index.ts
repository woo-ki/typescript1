// 타입스크립트에서 엘리먼트 조작시 주의사항
// title 은 null 이거나 엘리먼트 이거나(유니온타입)
// 내로잉 해줘야함.
const title = document.getElementById('title');
title instanceof Element ? title.textContent = '하이요' : null;

const anchor = document.querySelector('#link');
anchor instanceof HTMLAnchorElement ? anchor.href = 'https://kakao.com' : null;

// 내로잉 하는 다른 방법(2020년 부터 가능, 신문법) / 옵셔널 체이닝
// element?.xxx => element 가 xxx 를 사용할 수 있으면 진행해주고 아니면 undefined 반환
// 이벤트의 타입은 Event
// bindTest 자리에 바로 introduce 펑션을 넣어도 이벤트는 알아서 파라미터로 넘어감.
// 언바인딩을 하기 위해서는 바인딩 하는 이벤트에 이름지정이 필수
const introduce = (e: Event, x: string) => {
    console.log(e);
    console.log(x);
    console.log(e.target);
}
const btn = document.querySelector('#button');
btn?.addEventListener('click', function bindTest(e: Event) {
    introduce(e, '안뇽~');
    btn?.removeEventListener('click', bindTest);
});

// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
// <img id="image" src="test.jpg">
// html 안에 test.jpg 를 보여주고 있는 이미지 태그가 있다고 칩시다.
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
const img = document.querySelector('#image');
img instanceof HTMLImageElement ? img.src = 'change.jpg' : null;

// (숙제2) 바꾸고 싶은 html 요소가 많습니다.
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
// 자바스크립트 코드를 어떻게 짜야할까요?
const anchorList = document.querySelectorAll('.naver');
anchorList.forEach((t) => {
    t instanceof HTMLAnchorElement ? t.href = 'https://kakao.com' : null;
});