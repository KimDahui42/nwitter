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
