# My util function

## 설치

```
npm i mkt-util
```

## AnimationFrame

### Arguments

- animate(Function) : 반복할 함수
- \[fps=60](Number) : 초당 프레임 수

```javascript
const animation1 = new AnimationFrame(() => {
	console.log('test')
});

//animation start
animation1.start();

//animation stop
animation1.stop();
```

## getBrowser

### Return

(String): 브라우저 이름

```javascript
const browser = getBrowser();
```

## getDevice

### Return

(String): 디바이스 종류 ('pc' or 'mobile')

```javascript
const browser = getDevice();
```

## loadCss

css 파일을 lazy load 하고 콜백 함수를 실행 합니다.

### Arguments

- src(String) : 불러올 css 파일 경로
- \[callback](Function) : 콜백함수

```javascript
loadCss('https://wstatic-cdn.plaync.com/promo/app.css', () => {
	console.log('loaded css')
})
```

## loadJs

js 파일을 lazy load 하고 콜백 함수를 실행 합니다.

### Arguments

- src(String) : 불러올 js 파일 경로
- \[callback](Function) : 콜백함수

```javascript
loadJs('https://wstatic-cdn.plaync.com/promo/app.js', () => {
	console.log('loaded js')
})
```

## trim

문장 공백을 제거 합니다.

### Arguments

- url(String) : 문장
- \[removeAll = false](Boolean) : 전체 공백 제거 유무

### Return

(String): 공백이 제거된 문자열

```javascript
console.log(trim(' 안 녕 하 세 요!  '))
// => '안 녕 하 세 요!'

console.log(trim(' 안 녕 하 세 요!', true))
// => '안녕하세요!'
```

## wheelDirection

마우스 휠 방향을 체크 합니다.

### Arguments

- mouse wheel event

### Return

(Number) : up: -1 , down: 1

```javascript
$(window).on('mousewheel DOMMouseScroll', (e) => {
	console.log(wheelDirection(e))
	// => -1 or 1
});
```
