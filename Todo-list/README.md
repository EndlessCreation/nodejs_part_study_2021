# Todo-list

> Endless Creation 2021 Node.js Part Study Final Assignment

## 목표

Todo-list는 2021 Node Part Study의 최종 목표입니다. 간단한 CRUD를 만들고 DB를 사용하는 방법을 알고 있다면 쉽게 만들 수 있습니다. 해당 프로젝트는 ES6 기반으로 짜여져 있습니다. 너무 어려워서 개발을 못하겠다면 해당 코드를 살펴보면서 공부하시면 됩니다. (단, 이해를 쉽게 하기 위한 코드이기에 클린 코드로 작성되지는 않았습니다.)

## 과제

기획의 내용과 API 목록을 잘 읽고, 적절한 Web API 서버를 구현하세요. ORM과 DB 종류 선택은 자유지만 사용은 꼭 하셔야 합니다.

### 기획

- Todo를 만들고 관리할 수 있는 백엔드 서버를 만들어 주세요.
- Todo는 다음과 같은 구조를 갖고 있습니다.

```typescript
Todo {
    id: number; // Todo가 생성될 때 자동 생성되어야 합니다.
    writer: string; // 필수 값
    title: string; // 필수 값
    description: string; // 필수 값,
    isCompleted: boolean; // 초기 값: false
    createdAt: Date; // 생성시 자동 생성
    updatedAt: Date; // 생성시 자동 생성, 수정시 자동 갱신
}
```

- Todo는 생성/수정/삭제 할 수 있습니다.
- Todo의 완료 항목을 수정할 수 있습니다. (완료/미완료)

### API 목록

| 메소드 | URI                 | 기능                                          |
| ------ | ------------------- | --------------------------------------------- |
| POST   | /todos              | Todo를 만듭니다.                              |
| GET    | /todos              | Todo-list를 불러옵니다.                       |
| GET    | /todos/:id          | 특정 id를 가진 Todo를 불러옵니다.             |
| PATCH  | /todos/:id          | 특정 id를 가진 Todo를 수정합니다.             |
| PATCH  | /todos/:id/complete | 특정 id를 가진 Todo의 완료 항목을 수정합니다. |
| DELETE | /todos/:id          | 특정 id를 가진 Todo를 삭제합니다.             |

> 아래 나온 예시들은 Request와 Response 예시입니다. json 값들의 순서는 신경쓰지 않으셔도 됩니다.

#### POST /todos

```json
// Request Body
{
    "title": "test",
    "description": "잘 되나?",
    "writer": "김건훈"
}

// Response Body
{
    "createdAt": "2021-03-25T08:22:37.979Z",
    "isCompleted": false,
    "id": 3,
    "title": "test",
    "description": "잘 되나?",
    "writer": "김건훈",
    "updatedAt": "2021-03-25T08:22:37.980Z"
}
```

#### GET /todos

```json
// Response Body
[
  {
    "id": 1,
    "writer": "김건훈",
    "title": "Server 세미나",
    "description": "Server가 뭐지? Node.js가 뭐지?",
    "isCompleted": false,
    "createdAt": "2021-03-25T07:58:18.000Z",
    "updatedAt": "2021-03-25T08:01:29.000Z"
  },
  {
    "id": 2,
    "writer": "김건훈",
    "title": "test",
    "description": "잘 되나?",
    "isCompleted": false,
    "createdAt": "2021-03-25T08:01:51.000Z",
    "updatedAt": "2021-03-25T08:01:51.000Z"
  }
]
```

#### GET /todos/1

```json
// Response Body
{
  "id": 1,
  "writer": "김건훈",
  "title": "Server 세미나",
  "description": "Server가 뭐지? Node.js가 뭐지?",
  "isCompleted": false,
  "createdAt": "2021-03-25T07:58:18.000Z",
  "updatedAt": "2021-03-25T08:01:29.000Z"
}
```

#### PATCH /todos/2

```json
// Request Body
{
    "title": "제목",
    "description": "내용 변경",
    "writer": "김건훈"
}

// Response Body
{
    "id": 2,
    "writer": "김건훈",
    "title": "제목",
    "description": "내용 변경",
    "isCompleted": false,
    "createdAt": "2021-03-25T08:01:51.000Z",
    "updatedAt": "2021-03-25T08:25:35.000Z"
}
```

#### PATCH /todos/2/complete

```json
// Request Body
{
    "isCompleted": true
}

// Response Body
{
    "id": 2,
    "writer": "김건훈",
    "title": "제목",
    "description": "내용 변경",
    "isCompleted": true,
    "createdAt": "2021-03-25T08:01:51.000Z",
    "updatedAt": "2021-03-25T08:27:05.000Z"
}
```

#### DELETE /todos/2

```json
// Response Body
{
  "isDeleted": true
}
```
