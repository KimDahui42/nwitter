#Nwitter
Twitter (mini)clone with React and Firebase
Still confusing how to use git
# nwitter log
## 09.15 �⺻ ����
Git default branch�� master���� main���� ����� main�� compare �ؾ� push �ǵ��� �����Ǿ��־� �귣ġ�� master���� main���� �������־����
```
git checkout master
git brach main master -f
git checkout main
git push origin main -f
```

## 09.17-18 firebase
firebase �⺻ ��

## 09.20 
���� �޼���
```
./src/index.js
Attempted import error: './firebase' does not contain a default export (imported as 'firebase').
```
export�� �������� �ʾҴٴ� ���� firebase.js ���� �ϴܿ� `export default app;` �߰��� �ذ�

## 09.23
�α��� ��� �߰�
���� ����� �ƽ��� ��, `npm install`�� ��ġ�� ��Ű�� �̸��� ���� �̸��� ������ ������ �߻��Ѵ�. 
* `firebase.js->fbase.js`
`jsconfig.json` src ������ �������� ������ ���� ��θ� ���� �� �־� import ���� �������� ��������

## 09.25
AppRouter ������Ʈ�� ����� ������ �ϸ鼭�� �ڵ��� ���������� ì��� ���ؼ��� App������Ʈ���� �����ϴ� ���� ����.
JSX�� �ڹٽ�ũ��Ʈ �ڵ带 ������ ���� �ڵ带 �߰�ȣ�� ��������Ѵ�.
���̾�̽� �ʱ�ȭ�� ���� firevase.initializeApp(firebassConfig)�� �ٸ� ���Ͽ��� ������ �ʿ䰡 �����ϱ� fbase.js ���� �ȿ��� �����ϵ��� �ڵ带 ����
�α����� ���� ���, �ٸ� ���Ͽ��� �����Ѵ�. �̶� ���� ��� ���� ���̾�̽� ���� ����� �� ������ ���� ������ named export�� ������

## 09.27
router
���� ������Ʈ���� ���� ���ӽ��� ���� ���� �Ҵ����� ���
�ڵ� ����� isLoggedIn�� setIsLoggedIn���� �����ϴ� ���·� ���, �ʱ갪�� false, �α��� ���� ������ �� ���
<br><br>��Ű�� ��ü�� import�ϸ� ���α׷��� ���ſ����� ������ �������� import�Ѵ�.
<br>CRA�� ���� ����Ʈ ������Ʈ�� �⺻���� index.js���Ͽ� React.StrictMode�� �����Ѵ�. �� ������ ������ ������ console.log �Լ��� 2�� ����ȴ�(������ ���� �����ϱ� ����).
* ���̾�̽� ���� ����... `auth/invalid-api-key`
	* .env ���� `REACT_APP_API_KEY`�� `REACT_APP_API_KET`���� ��Ÿ, �����Ϸ�
	input ������Ʈ���� email �Է°� password �Է��� �����ϱ� ���� 2���� �Լ��� ����� ������� event.target.name���� input ������Ʈ�� �����ϴ� ����� �� ȿ����

## 09.29
error�� ���̾�̽��� ������ ���õ� ���� ������ �ڼ��� �����ִ� ��ü
Auth.js ������ `onSubmit`�Լ����� try-catch������ ������ �ֿܼ� ����ϴ� �ڵ尡 ����ִ�.
=>`setError`�Լ��� `error.message`�� �����ؼ� error ���¸� ����Ѵ�.
* `UseState`�Լ��� �Լ��� ���ڷ� �����ϸ� ���ڷ� ������ �Լ��� ù��° ����(prev)�� ������ ���°� �Ѿ�´�.
* �Ҽ� �α����� �����Ϸ��� `event.target.name`�Ӽ��� ����Ѵ�.
* `signWithPopup`�Լ��� �ʿ��� ������ �� `provider`�� ����ִ�(�Ҽ� �α��� ��ü�̸�, ���� ����� ����, �Ҽ� �α��� ��û �ּ� ��).

## 09.30
* ���̾�̽� ���� ����...
<br>���� �޼���
```
FirebaseError: [code=not-found]: The project undefined does not exist or it does not contain an active Cloud Datastore or Cloud Firestore database
```
	* .env ���� `REACT_APP_PROJECT_ID`�� `REACT_APP_PROJECT_I`���� ��Ÿ, �����Ϸ�
* `nweets.map is not a function`
	* ���� ���� `const [nweets, setNweets] = useState([]);`�� `const [nweets, setNweets] = useState("");`�� ������, �����Ϸ�
<br>
get �Լ��� ���̾����� �����͸� �޾ƿ� ȭ���� �������� ���� ȭ�鿡 �ݿ���<br>

## 10.02
`Ÿ������ ��Ȯ�ϰ� ����`<br>
creatorId�� ���� �α����� ����� uid�� ���ؼ� ������ <����>��ư�� <����>��ư�� �����ش�.

## 10.03
`window.confirm`�� Ȯ���� Ŭ���ϸ� `true`��, ��Ҹ� Ŭ���ϸ� `false`�� ��ȯ�Ѵ�.<br>
doc�Լ��� ���� ��θ� ���ڿ��� �Է� �޾Ƽ� ������ ��ȯ�Ѵ�.
* alertâ���� �ѱ� ����
