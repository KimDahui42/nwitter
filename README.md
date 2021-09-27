#Nwitter
Twitter (mini)clone with React and Firebase
Still confusing how to use git
# nwitter log
## 09.15 기본 설정
Git default branch가 master에서 main으로 변경됨 main과 compare 해야 push 되도록 설정되어있어 브랜치를 master에서 main으로 변경해주어야함
```
git checkout master
git brach main master -f
git checkout main
git push origin main -f
```

## 09.17-18 firebase
firebase 기본 셋

## 09.20 
오류 메세지
```
./src/index.js
Attempted import error: './firebase' does not contain a default export (imported as 'firebase').
```
export가 설정되지 않았다는 설명에 firebase.js 파일 하단에 `export default app;` 추가로 해결

## 09.23
로그인 기능 추가
절대 경로의 아쉬운 점, `npm install`로 설치한 패키지 이름이 파일 이름과 같으면 오류가 발생한다. 
* `firebase.js->fbase.js`
`jsconfig.json` src 폴더를 기준으로 폴더나 파일 경로를 적을 수 있어 import 문의 가독성이 좋아진다

## 09.25
AppRouter 컴포넌트가 라우터 역할을 하면서도 코드의 가독성까지 챙기기 위해서는 App컴포넌트에서 관리하는 것이 좋다.
JSX에 자바스크립트 코드를 삽입할 때는 코드를 중괄호로 감싸줘야한다.
파이어베이스 초기화를 위한 firevase.initializeApp(firebassConfig)는 다른 파일에서 참조할 필요가 없으니깐 fbase.js 파일 안에서 실행하도록 코드를 수정
로그인을 위해 사용, 다른 파일에서 참조한다. 이때 인증 모듈 외의 파이어베이스 관련 모듈을 더 내보낼 수도 있으니 named export를 적용함

## 09.27
router
상위 컴포넌트에서 받은 프롭스는 구조 분해 할당으로 사용
코드 실행시 isLoggedIn은 setIsLoggedIn으로 관리하는 상태로 취급, 초깃값은 false, 로그인 값을 변경할 때 사용
<br><br>패키지 전체를 import하면 프로그램이 무거워지기 때문에 모듈단위로 import한다.
<br>CRA로 만든 리액트 프러젝트를 기본으로 index.js파일에 React.StrictMode를 설정한다. 이 설정을 지우지 않으면 console.log 함수가 2번 실행된다(오류를 쉽게 포착하기 위함).
* 파이어베이스 오류 수정... `auth/invalid-api-key`
	* .env 파일 `REACT_APP_API_KEY`를 `REACT_APP_API_KET`으로 오타, 수정완료
	input 엘리먼트에서 email 입력과 password 입력을 구분하기 위해 2가지 함수를 만드는 방법보다 event.target.name으로 input 엘리먼트를 구분하는 방법이 더 효율적
