# Node.js 개념 및 실습

Created: May 14, 2021 3:31 PM

- **Node.js 기본 개념**
  - Node.js & npm 설치하기(nvm 활용)
  - console.log로 "Hello world" 출력하기
  - Node.js REFL
  - npm
- **비동기란?**
- **Node.js 동작 방식**
  - Single Thread
  - I/O Blocking
  - Event loop

# Node.js 기본 개념

Node.js가 무엇인가요? 보통 '서버'라고 많이 이야기 합니다. 하지만 Node.js는 서버가 아닙니다.

Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.

런타임은 특정 언어로 만든 프로그램들을 실행할 수 있는 환경을 뜻합니다. 따라서 노드는 자바스크립트 프로그램을 컴퓨터에서 실행할 수 있습니다. 쉽게 말해 노드는 자바스크립트 실행기라고 봐도 무방합니다. 쉽게 Chrome과 같은 브라우저를 생각해봅시다. 브라우저는 html, css, js를 사용해 맨날 저희가 보는 웹페이지를 띄워줍니다. 특히 Chrome에는 V8 이라는 Javascript 엔진이 내장되어있습니다. 따라서 브라우저는 엔진을 활용해 Javascript 파일을 실행할 수 있는 것이죠!

![Untitled](https://user-images.githubusercontent.com/28949165/118403867-6aa82780-b6ab-11eb-9c3d-abe1ad27b714.png)

V8은 자바스크립트를 바이트코드로 컴파일하고 실행합니다. Node.js는 V8을 이용해 만들어진 런타임이라 브라우저처럼 Javascript를 컴파일하고 실행할 수 있는 것 입니다.

여기서 이제 script언어는 즉시 실행이 가능해서 인터프리터로 처리되지 않나?라고 의문이 들어야 합니다. V8 엔진은 Javascript를 ByteCode로 컴파일한 후 이를 실행하는데 이때 JIT Compile 기법을 사용해 속도를 크게 끌어올려 Interpreter의 느린 실행 속도를 개선했다고 합니다.

Node.js의 자세한 동작은 이후에 알아보고 지금은 먼저 설치부터 해봅시다!

## NVM을 이용해 Node.js 설치하기

NVM은 version manager for node.js입니다. 프로젝트의 요구사항에 맞춰 버전을 바꾸거나 최신 버전을 사용하고 싶을 때 번거롭게 설치하고 환경 변수를 세팅해주는 번거로움을 덜어주는 기가 막힌 친구입니다. 더불어 node 설치 시 발생할 수 있는 수많은 에러 상황들을 피해갈 수 있어 굉장히 용이합니다.

- Windows

  Windows를 안쓴지 오래 되어서 생길 수 있는 몇 가지 문제에 대해서 잘 알지 못합니다. 잘되길 빌며..

  1. nvm-windows를 설치해줍니다.

  ```bash
  https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7
  // 최신 버전이 아닐 수 있으므로 최신 릴리즈를 체크해주세여
  ```

  2. 관리자 권한으로 nvm-windows를 실행시킵니다.

- Linux & Mac(Unix)

  1. 먼저 nvm을 설치해줍니다.

  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  ```

  2. 환경 변수 세팅을 해줍니다.

  ```bash
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  ```

NVM을 설치했으면 이제 Node.js를 설치해봅시다. 아주 간단합니다.

```bash
nvm install 14.17.0 or latest
nvm use 14.17.0 or latest
```

## console.log로 "Hello world" 출력하기

Node.js도 설치해봤으니 이제 모든 개발 공부 시작의 국룰인 'Hello world'를 출력해봅시다.

먼저 터미널을 켭니다.

![Untitled 1](https://user-images.githubusercontent.com/28949165/118403849-624fec80-b6ab-11eb-8008-54f0c1dbf8cb.png)

Node.js가 잘 설치되었다면, node를 입력했을 때 다음과 같이 node가 실행될 거에요.

![Untitled 2](https://user-images.githubusercontent.com/28949165/118403853-65e37380-b6ab-11eb-8867-a457b26871c5.png)

아래 코드를 입력해봅시다.

```jsx
console.log("Hello world");
```

또 다음 코드를 index.js에 작성하고 이를 node로 실행시켜봅시다.

## Node.js REPL

node를 실행하면 명령어를 한 줄 씩 입력할 수 있는 친구가 나옵니다. 커맨드 라인 인터페이스를 통해 입력 받은 코드를 읽고(Read) 해석하고(Eval) 결과물을 반환하고(Print) 종료할 때 까지 반복합니다.(Loop) 이를 REPL이라고 합니다.

![Untitled 3](https://user-images.githubusercontent.com/28949165/118403855-67ad3700-b6ab-11eb-9bf4-3af89560c33d.png)

몇 가지 간단한 코드들을 작성해보며 REPL을 통해 실습을 해봅시다.

```jsx
const a = 1;
const b = 2;
a + b; // 3

let add = a + b;
console.log(add); // 3
console.log(++add); // 4

console.log(++a);
// Uncaught TypeError: Assignment to constant variable.
```

## NPM

Node.js가 오픈소스 생태계에서 크게 발전할 수 있던 요인 중 하나가 바로 npm입니다. npm은 Node Package Manager의 약자로 Node.js에서 사용하는 모듈들을 패키지로 만들어 npm을 통하여 관리하고 배포하고 있습니다.

- **모듈이란?**

  특정한 기능을 하는 함수나 변수들의 집합입니다. 예를 들면 수학에 관련된 코드들만 모아서 모듈로 만들어 사용할 수 있고, 시간과 관련된 코드들을 만들어 이를 모듈로 만들 수도 있는 것이죠. 따라서 모듈은 하나의 프로그램이자 다른 프로그램의 부품으로 사용될 수 있습니다.

  ![Untitled 4](https://user-images.githubusercontent.com/28949165/118403856-67ad3700-b6ab-11eb-973f-a230d7e85b24.png)

  아주 간단하게 모듈을 직접 만들어보고 모듈에 대해 이해해봅시다.

  ```jsx
  // classify.js
  const odd = "홀수입니다.";
  const even = "짝수입니다.";

  module.exports = { odd, even };

  // test.js
  const { even, odd } = require("./classify");

  const isOddOrEven = (tmp) => {
    if (tmp % 2) {
      console.log(odd);
    } else {
      console.log(even);
    }
  };

  isOddOrEven(7);
  isOddOrEven(6);
  ```

npm은 node를 설치하면 같이 설치가 됩니다. `npm -v`를 통해 정말 npm이 설치되어 있는지 확인해보세요. npm을 사용하면 [https://www.npmjs.com/](https://www.npmjs.com/)에 등록되어 있는 수 많은 패키지들을 다운 받아 사용할 수 있습니다. 이에 대해서는 다음에 자세히 설명할 기회가 있을 때 설명드리고 일단 이 정도만 알고 넘어가주시면 되겠습니다.

## Node.js 동작 방식

오늘 배울 내용 중에서 제일 중요하고 무조건 기억해야 하는 내용입니다. 이 내용은 앞으로 개발함에 있어 항상 기본 베이스로 깔리게 될 개념입니다. 하지만 많이 어렵고 또 지금 알려주는 내용은 뭉뚱그려 알려줄 것입니다. 따라서 자료를 드릴테니 혼자서라도 깊게 공부하세요.

![Untitled 5](https://user-images.githubusercontent.com/28949165/118403857-6845cd80-b6ab-11eb-9e3a-4f6922ead5df.png)

## 비동기

먼저 Node.js의 동작 방식에 대해 알아보기 전에 비동기가 무엇인지에 대해 알아봅시다. 아래 사진은 **동기** 작업을 시각화 한 것입니다. 보면 Actor1은 Actor2에게 일을 시키고 나서 Actor2의 일이 끝날 때 까지 기다립니다. 처리를 순차적으로 진행해주는 것을 동기 작업이라고 합니다.

![Untitled 6](https://user-images.githubusercontent.com/28949165/118403859-6845cd80-b6ab-11eb-92ef-e84d7571f019.png)

**비동기** 작업은 순차적으로 처리를 진행하지 않습니다. 밑에 그림을 보면 Actor1은 Actor2에게 일을 시키고 본인의 일을 그냥 합니다. Actor2가 일을 다 했다고 알려주면 그때 값을 받습니다. 본인의 일은 계속 진행하고 있었죠. 이때 Actor2를 백그라운드라고 말하는데, 여러 작업이 동시에 실행될 수도 있는 공간입니다. Actor1은 전혀 신경을 쓰지 않는 공간이죠. 백그라운드에서는 일을 다 하면 Actor1에게 일이 다 끝났다고 알려주기만 할 뿐 입니다.

![Untitled 7](https://user-images.githubusercontent.com/28949165/118403860-68de6400-b6ab-11eb-9f90-780313da1b0f.png)

이 그림들로 직관적인 이해가 힘들다면 다음 그림을 보면 좀 이해가 편할 거에요.

![Untitled 8](https://user-images.githubusercontent.com/28949165/118403861-68de6400-b6ab-11eb-960c-3f686e33dd6f.png)

## I/O Blocking

Node.js를 만든 사람은 Ryan Dhal(라이언 달)입니다. 라이언 달은 기존 I/O 방식(거의 모든 프로그래밍에 대한)에 대해 불만을 가지고 있는 사람입니다.

```jsx
result = query("select * from T");
```

많은 어플리케이션은 데이터베이스에 엑세스하는 코드를 위 방식과 비슷하게 많이 짭니다. 근데 데이터베이스라는 것이 자신의 컴퓨터에도 깔려있을 수 있지만 부산에 있을 수도 있고, AWS를 사용한다면 홍콩이나 다른 먼 곳에 존재할 수도 있습니다. 그래도 쿼리는 수행돼요. Function으로 추상화를 한 I/O이 실행되고, 아주 먼 곳에서 함수의 결과가 리턴됩니다. 이때 라이언 달은 이렇게 말합니다.

> "여기서 의문점은, 이 쿼리 함수가 작업하는 동안 소프트웨어는 무엇을 하고 있죠?"

대부분의 경우, 클라이언트(소프트웨어겠죠)는 가만히 앉아서 서버의 응답을 기다리며 아무것도 안합니다. 라이언 달은 이게 싫습니다. 쿼리를 넘어서 좀 더 보편적인 상황을 살펴보겠습니다.

```jsx
// Non-blocking
L1      : 3 cycles
L2      : 14 cycles
RAM     : 250 cycles
------------------------------
// Blocking
DISK    : 41,000,000 cycles
NETWORK : 240,000,000 cycles
```

CPU에 들어있는 L1, L2 캐시 메모리는 처리 속도가 굉장히 빠릅니다. 몇 사이클이면 그냥 결과가 리턴되죠. 램도 마찬가지에요. 근데 디스크나 네트워크 쪽 처리 속도는 상당히 느립니다. 그렇기 때문에 L1, L2, RAM에서 다루는 I/O와 디스크&네트워크에서 다루는 I/O는 다르게 다뤄야 합니다.

인터넷에 떠도는 이야기이기도 하고 교수님들이 비슷하게 설명하는 내용이 있습니다. CPU에 접근하는 것은 책상으로 가서 서랍을 열어 서류 몇 장 꺼내는 것이고, RAM은 복도를 지나가서 다른 방의 누군가랑 이야기를 좀 하다 들어오는 것이고, 디스크에 접근하는 것은 비행기를 타고 LA에 가서 서류를 받아오는 것과 같습니다.

## Event loop & Single Thread

그렇다면 위의 문제를 해결하기 위한 방법은 뭐가 있을까요? 대표적으로 NGINX와 Apache라는 웹 서버는 이를 다르게 해결합니다.(웹 서버에 대한 개념은 일단 그렇구나 하고 넘어가주세요^^..) NGINX는 이를 이벤트 루프 방식으로 처리하고 Apache는 멀티 쓰레드 방식으로 처리합니다.

멀티 쓰레드는 쉽게 생각해서 여러 명이 대기하고 있어서 한 명이 일을 열심히 하고 있으면 다른 사람에게 그 다음 일을 시키는 것이라고 생각하면 됩니다. 이벤트 루프는 아까 설명드렸던 비동기 방식으로 일을 처리합니다. 그래서 혼자서 모든 일을 다 처리하는 것 입니다.

![Untitled 9](https://user-images.githubusercontent.com/28949165/118403862-6976fa80-b6ab-11eb-8332-0a34612d2fff.png)

위의 사진은 처리량이고 아래 사진은 메모리 사용량입니다.

![Untitled 10](https://user-images.githubusercontent.com/28949165/118403863-6a0f9100-b6ab-11eb-9edb-51117a5dafe0.png)

훨씬 월등하게 NGINX가 모든 면에서 앞서는 것을 볼 수 있습니다. 사실 더 많은 이유로 NGINX가 빠른 것이지만, 이벤트 루프를 사용한다면 충분히 적은 리소스로 많은 양의 효율을 낼 수 있다는 것을 알 수 있기에 라이언 달은 이벤트 루프 기반으로 동작하는 프레임워크를 만들기 위해 노력했습니다. 이에 Javascript가 이벤트 루프 기반에 알맞는 언어여서 Node.js가 탄생하게 됩니다. 따라서 Node.js는 아래의 특징을 갖게 됩니다.

- I/O Non-Blocking
- Event Loop
- Single Thread

## Node.js에서 Javascript 실행 과정

### I/O Blocking이 일어날 상황이 아닌 경우

```jsx
function third() {
  console.log("세 번째");
}

function second() {
  third();
  console.log("두 번째");
}

function first() {
  second();
  console.log("첫 번째");
}

first();
// 세 번째
// 두 번째
// 첫 번째
```

![Untitled 11](https://user-images.githubusercontent.com/28949165/118403864-6a0f9100-b6ab-11eb-8d06-07a63a501cbb.png)

### I/O Blocking이 일어날 경우

```jsx
function run() {
  console.log("3초 후 실행");
}

console.log("시작");
setTimeout(run, 0); // 기다리는 명령어 / wait();
console.log("끝");
```

![Untitled 12](https://user-images.githubusercontent.com/28949165/118403865-6aa82780-b6ab-11eb-83e2-75d2b7590392.png)
