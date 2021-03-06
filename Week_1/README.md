# 서버 개념

Created: Apr 23, 2021 4:43 PM

- **Server란?**
  - Client & Server
  - Front-End & Back-End
  - API
- **HTTP**
  - HTTP Request Message
  - HTTP Request Methods
  - HTTP Status Code

# Node.js 파트 별 스터디 시작!

여러분 반갑습니다. 본 자료는 각종 구글링과 제로초님의 'Node.js 교과서'를 기반으로 만들었습니다. 여러분들께서 공부하시는데 최대한 어려움이 없도록 쉽게 풀어서 설명해보려고 합니다. 자세한 내용들까지는 다루지 못해서 실제로 프로젝트를 진행할 때는 많이 부족함을 느낄 것입니다. 따라서 이번 스터디를 서버가 무엇인지, Node.js가 무엇인지, 어떻게 서버를 만드는지 감을 잡는 용도로 써먹어주시길 바랍니다. 이후 토이 프로젝트나 더 깊은 공부를 통해 서버의 맛을 알아보도록 합시다^^

# Client & Server

### 클라이언트 서버 모델은 서비스 요청자인 클라이언트와 서비스 자원의 제공자인 서버 간에 작업을 분리해주는 네트워크 아키텍처입니다.

![Untitled](https://user-images.githubusercontent.com/28949165/118403734-bdcdaa80-b6aa-11eb-8d07-7f56d69de8a9.png)

클라이언트가 서버에 서비스를 요청하면, 서버는 적절한 서비스를 제공합니다.

- **클라이언트**
  - 요청을 보내는 주체
  - 브라우저, 모바일 앱, 서버 등..
- **서버**
  - 네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 컴퓨터 또는 프로그램

![Untitled 1](https://user-images.githubusercontent.com/28949165/118403735-c0300480-b6aa-11eb-823c-8408114147c1.png)

예를 들어 브라우저는 네이버에 접속 시 화면을 띄우기 위해 index.html를 네이버 서버에 요청합니다. 서버는 index.html를 브라우저에 응답하게 되고 브라우저는 이를 받아 화면을 띄우게 됩니다. 브라우저처럼 데이터를 요청하는 입장을 클라이언트, 반대로 데이터를 제공해주는 입장을 서버라고 합니다.

네이버에서 결제를 위해 카카오페이를 연동했다고 생각해볼까요? 그렇다면 네이버 서버에서 카카오페이 서버에 결제 요청을 보내게 될 것 입니다. 이때 네이버 서버가 클라이언트, 카카오페이 서버가 서버가 됩니다. 이처럼 서버라고 응답만 해주는 것이 아니라 요청을 보내서 클라이언트의 역할을 수행할 수도 있으니 클라이언트-서버 개념에 있어서 유동적으로 생각할 수 있으면 좋겠습니다.

## 오 그럼 이제 서버가 뭔지 알았으니까 뭘 공부해야 할지 알아볼까?

![Untitled 2](https://user-images.githubusercontent.com/28949165/118403736-c0c89b00-b6aa-11eb-9ec7-16886b0463db.png)
![Untitled 3](https://user-images.githubusercontent.com/28949165/118403738-c1613180-b6aa-11eb-8d41-4e912f94850f.png)
**^오^.. 그만 알아보자..**

앞으로 죽을 때 까지 쭉 계속 공부를 하면 되지 않을까요? 저희 스터디는 이 로드맵 중에서 제일 기초적인 부분들과 그 기초적인 부분들 중에서 핵심 내용들만 뽑아서 알려드릴 예정입니다. 그러니 제가 알려드리는 내용 이외에 배워야 할 것들이 넘쳐나니 혼자서 정진하셔야 합니다.^^

# Front-End와 Back-End

서버와 클라이언트는 누가 요청하고 누가 응답하는지에 따라 구분을 했었습니다. Front-End & Back-End는 사용자 입장으로 나뉘어지며 사용자에게 바로 보여지는 영역과 데이터가 처리되는 영역으로 나뉘어지는 개념입니다.

React로 개발한 웹 사이트를 서버 컴퓨터에 올려뒀습니다. 이제 사이트에 접속하기 위해 해당 html이나 js, css같은 파일들을 브라우저가 요청합니다. 그렇다면 React로 작성한 프로그램은 서버인가요?

![Untitled 4](https://user-images.githubusercontent.com/28949165/118403740-c45c2200-b6aa-11eb-881d-e7915d01a1a0.png)

지금 보이시는 보라색 경계선부터는 서버의 영역이고 사용자 컴퓨터가 클라이언트입니다. 그러니 React로 개발한 웹 사이트 역시 서버가 맞습니다! 유저 입장에서 보기에 React로 작성된 코드들은 직접 보여지고 사용자가 눈으로 확인할 수 있는 친구들입니다. 디자인이 되어있는 것들이 변하지 않고 제공되는 형식들이 정해져있는데요. 이렇게 특정 서비스에 의해 데이터를 처리하는 일이 없이 제공되는 정적인 데이터를 보여주는 영역을 Front-End라고 합니다. React로 작성하면 웹 쪽 Front-End 코딩을 하게 되는 것이구요, Andriod, iOS 코딩을 하게 되면 앱 쪽 Front-End 코딩을 하게 되는 것 입니다.

그렇다면 Back-End는 뭘까요? 특정 서비스를 통해 변화되는 데이터를 제공해주는 곳이 바로 Back-End입니다. 예를 들어 현 사용자가 우리 서버의 회원이 맞는지? 사용자가 좋아요를 누른 게시물들이 무엇인지? 해당 사용자가 작성한 포스팅에는 어떤 것들이 있는지? 등등 어떤 특정한 서비스를 처리하기 위해 굉장히 유동적으로 변화되는 데이터들을 처리해주는 곳이 바로 Back-End입니다.

그러니 Front-End와 Back-End는 서버와 클라이언트 개념에서 벗어나 유저의 관점에서 생각하는 것입니다. IT 서비스가 발전하며 점차 다양한 분야의 개발이 필요해지고 유저의 니즈를 만족시키기 위해서는 굉장히 다양한 클라이언트에서 동작하는 서비스들이 필요해지게 됐는데요! 그러다보니 점차 Front-End와 Back-End의 구분을 두고 특정 영역에서 개발을 하게 되는 전문가들이 생겨나게 됐습니다.

# API(Application Programming Interface)

> API는 응용 프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻합니다. / 위키피디아

IT 서비스가 빠르게 발전하면서 다양한 클라이언트들이 생겨나고 있습니다. 웹, 앱, 서버, 게임 등등 이 모든 클라이언트들과 통신을 하려면 어떻게 해야 효율적으로 통신을 할 수 있을까요? 서버 입장에서 모든 클라이언트에 맞춰 통신하는 것 보다는 클라이언트들이 서버에 맞춰서 통신하는것이 효율적이겠죠? API 서버는 바로 이런 환경에서 효율적으로 통신할 수 있는 서버입니다. API는 쉽게 생각해서 기계와 기계의 소통을 위한 기능 혹은 명세입니다. Front-End와 Back-End가 소통을 하기 위해서는 API라는 것이 명세되어야 하고 명세된 API에 따라 통신을 하게 됩니다.

```jsx
A라는 사람과 B라는 사람이 있습니다. A라는 사람이 B라는 사람에게 정보를 전달하려면 의사소통을 해야 합니다.
이 두 사람 간의 의사소통에는 몇 가지 규칙이 있습니다.

1. 한국어로 대화할 것
2. 한 사람의 말이 끝나기 전까지 경청할 것
3. 둘 간의 합의된 내용으로 대화를 진행할 것
```

이해를 돕기 위해 사람과 사람의 대화를 API로 표현해봤습니다. 이게 컴퓨터가 된다면 다음과 같겠죠.

```jsx
{아이폰과 안드로이드} 그리고 {서버}가 있습니다. {안드로이드 혹은 아이폰}이 {서버}와 정보를 주고 받으려면 의사소통을 해야 합니다.
이 두 관계 간의 의사소통에는 몇 가지 규칙이 있습니다.

1. JSON으로 대화할 것
2. HTTP 통신 규약에 맞게 통신할 것
3. 둘 간의 합의된 내용으로 통신을 진행할 것
```

이런 식으로 서로의 통신을 위해 사용하는 것이 바로 API입니다. 또한 이 목적으로만 설계된 서버가 바로 API 서버입니다. 각각의 Front-End 전부 통신을 할 때 규칙을 정하기에는 너무 어려우니 우리 서버와 통신을 할 것이라면 다음과 같은 규칙에 따라 통신해라! 라는 것이죠. 그러니 좀 쉽게 생각해보면 API 서버는 다른 서비스(앱이나 웹, 서버 같은 클라이언트)에 기능을 제공해준다! 라고 이해하시면 됩니다. Front-End에서 API 서버가 제공하는 API를 이용해서 특정한 기능을 이용한다고 생각하시면 됩니다. 로그인을 하고 싶다면 클라이언트의 종류에 상관없이 API 서버가 로그인을 위해 시키는 방식대로만 통신을 하면 로그인을 할 수 있습니다. 다른 기능들도 마찬가지입니다.

[https://developers.kakao.com/docs](https://developers.kakao.com/docs)

API 서버는 그래서 다음과 같이 본인과 통신하기 위해서는 이렇게 해야 돼~ 라고 알려주는 문서을 제공해야 합니다. 이런 문서들을 효율적으로 작성하게 해주는 도구들이 많이 있는데, 이는 나중에 개발하면서 제가 알려드리겠습니다. 일단은 API 서버는 API 문서를 클라이언트에 제공해준다고만 알고 계시면 될 것 같습니다.

# HTTP(HyperText Transfer Protocol)

주로 API 통신을 할 때는 HTTP를 사용해 REST API로 통신을 합니다. HTTP가 무엇인지 모르고 서버 개발을 하게 된다면 본인이 개발을 하면서도 뭘 개발하는지 몰라서 답답할 경우가 많을 것 입니다. 굉장히 깊고 어려운 내용이지만 일단 오늘은 HTTP에 대해 간단하게 알아보고 나중에 꼭 깊게 공부하시는 것을 추천드립니다.

### HTTP Request Message

![Untitled 5](https://user-images.githubusercontent.com/28949165/118403742-c4f4b880-b6aa-11eb-9cfe-b35bc2bbb255.png)

HTTP 메세지는 서버와 클라이언트가 서로 HTTP 통신을 할 때 주고 받는 메세지를 의미합니다.

- 시작 줄에 클라이언트가 서버에 요청하는 내용이 담겨있거나 / 서버가 클라이언트에게 요청에 대해 수행한 결과가 담깁니다.
- HTTP Headers들이 포함되는데 이는 HTTP 통신의 옵션 정도라고 생각하시면 되겠습니다.
- 빈 칸이 나오게 되고 그 밑에부터 body의 내용들이 담기게 됩니다.

### HTTP Request Methods

클라이언트가 서버에 보내는 HTTP 메세지의 첫 번째 줄의 첫 단어는 항상 HTTP Request Method입니다. HTTP 메소드라고 부르는데요! 아래 5가지만 기억하시면 좋을 것 같습니다.

- GET - 데이터를 주세요!
- POST - 서버에 이 데이터 좀 보내주세요!
- PUT/PATCH - 다음 데이터들로 수정 부탁드립니다!
  - PUT은 그 해당 데이터와 연관이 있는 모든 데이터들을 다 수정하겠다! 라는 의미이고 PATCH는 이 친구만 수정하겠다! 라는 의미입니다. 이건 일단 넘어가죠!
- DELETE - 데이터를 좀 없애주세요!

GET과 POST를 잘 구분해서 사용을 해야 합니다. GET 요청은 Body를 보내지 않고 HTTP Headers까지만 보내고 POST 요청은 Body까지 같이 보내게 됩니다. Body에는 담을 수 있는 데이터의 크기가 한정되어 있지 않아 많은 양의 데이터를 전송할 수도 있고 다양한 타입의 Body들이 있어서 단순한 문자열들 뿐만 아니라 사진, 영상, 음악 같은 데이터들도 보낼 수 있습니다.

### HTTP Status Code

HTTP 통신 이후 서버가 클라이언트에게 지금 통신이 어떻게 이뤄졌는지에 대해서 코드로 알려주게 되어있습니다. 클라이언트는 해당 코드 값을 보고 지금 이 통신이 어떤 결과값을 가지고 있는지 알 수 있죠. 굉장히 중요하고 뭐가 엄청 많아서 어려울 수 있지만 첨부한 표를 보면서 한 번 제대로 알아봅시다.

[https://developer.mozilla.org/ko/docs/Web/HTTP/Status](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

## HTTP 통신 방법

자 그럼 일단 HTTP가 무엇인지 맛만 봤습니다. 아직 HTTP가 뭐고 그래서 어떻게 통신을 하는지 감이 잘 안오실 겁니다.

[https://www.notion.so/dnatuna/HTTP-c7fe517d8726472ba19ccd0b271f92c6](https://www.notion.so/dnatuna/HTTP-c7fe517d8726472ba19ccd0b271f92c6)
