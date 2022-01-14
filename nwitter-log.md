# Nwitter
Twitter (mini)clone with React and Firebase
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
AppRouter ������Ʈ�� ����� ������ �ϸ鼭�� �ڵ��� ���������� ì��� ���ؼ��� App������Ʈ���� �����ϴ� ���� ����.<br>
JSX�� �ڹٽ�ũ��Ʈ �ڵ带 ������ ���� �ڵ带 �߰�ȣ�� ��������Ѵ�.<br>
���̾�̽� �ʱ�ȭ�� ���� firevase.initializeApp(firebassConfig)�� �ٸ� ���Ͽ��� ������ �ʿ䰡 �����ϱ� 
fbase.js ���� �ȿ��� �����ϵ��� �ڵ带 ���� �α����� ���� ���, �ٸ� ���Ͽ��� �����Ѵ�. <br>
�̶� ���� ��� ���� ���̾�̽� ���� ����� �� ������ ���� ������ named export�� ������

## 09.27
router
���� ������Ʈ���� ���� ���ӽ��� ���� ���� �Ҵ����� ���<br>
�ڵ� ����� isLoggedIn�� setIsLoggedIn���� �����ϴ� ���·� ���, �ʱ갪�� false, �α��� ���� ������ �� ���<br>
<br><br>��Ű�� ��ü�� import�ϸ� ���α׷��� ���ſ����� ������ �������� import�Ѵ�.
<br>CRA�� ���� ����Ʈ ������Ʈ�� �⺻���� index.js���Ͽ� React.StrictMode�� �����Ѵ�. �� ������ ������ ������ console.log �Լ��� 2�� ����ȴ�(������ ���� �����ϱ� ����).
* ���̾�̽� ���� ����... `auth/invalid-api-key`
	* .env ���� `REACT_APP_API_KEY`�� `REACT_APP_API_KET`���� ��Ÿ, �����Ϸ�
	input ������Ʈ���� email �Է°� password �Է��� �����ϱ� ���� 2���� �Լ��� ����� ������� event.target.name���� input ������Ʈ�� �����ϴ� ����� �� ȿ����

## 09.29
error�� ���̾�̽��� ������ ���õ� ���� ������ �ڼ��� �����ִ� ��ü<br>
Auth.js ������ `onSubmit`�Լ����� try-catch������ ������ �ֿܼ� ����ϴ� �ڵ尡 ����ִ�.<br>
=>`setError`�Լ��� `error.message`�� �����ؼ� error ���¸� ����Ѵ�.<br>
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
* alertâ���� �ѱ� ����(�ذ�)
	* �޸������� ��� �ٸ� �̸����� ����->���ڵ� ansi���� utf-8�� ����->����

## 10.04
* alertâ���� �ѱ� ����(�ذ�)
	* �޸������� ��� �ٸ� �̸����� ����->���ڵ� ansi���� utf-8�� ����->����<br>
FileReader : ���ε��� ������ �� �������� ����� �� �ִ� ������ API<br>
`readAsDataURL` ���� ������ ���ڷ� �޾Ƽ� ���� ��ġ�� URL�� ��ȯ���ش�.
<br> ����Ʈ �����ֱ� �Լ�ó�� ���� ���� �� '�� �������� ������ �ν��ϴ� ����','�� ������ ���� �ν��� ���� ����'���� �����ϰ� �־ �������� �Բ� ������ ��� URL�� ���� �� �ִ�.
### UUID ���̺귯��
> ���� ���� �ĺ���(���̵� ���̺귯��)

## 10.05
* ���� �޼���
```
Uncaught (in promise) FirebaseError: Firebase Storage: No default bucket found. Did you set the 'storageBucket' property when initializing the app? (storage/no-default-bucket)
```
|�ڵ�|����|
|:---------:|:------:|
|storage/bucket-not-found|Cloud Storage�� ������ ��Ŷ�� �����ϴ�.|

* �� ��Ÿ�����Ͱ��Ƽ�...fbase.js ������ Ȯ���ߴ�. 
	* fbase.js ���� `process.env.REACT_APP_STORAGE_BUCKETREACT_APP_PROJECT_ID`�� `process.env.REACT_APP_STRAGE_BUCKET`���� ��Ÿ, �����Ϸ�

## 10.06
`where`�Լ��� �ʵ�, ����, ã������ �� ������ ���ڸ� �����ؼ� ����Ѵ�.
* 07-1 ���� �۾��ߴ� ����
```
const getMyNweets = async () => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorID", "==", userObj.uid)
            .orderBy("createdAt", "asc")
            .get();

        console.log(nweets.docs.map((doc) => doc.data()));
    };

    useEffect(() => {
        getMyNweets();
    }, []);
```

`userObj`�� `App.js` ���Ͽ��� ����� `authService`�� `onAuthStateChanged`�� ���ڷ� ������ user�̴�.
<br> user�� userObj���·� ����
<br> ����Ʈ�� ���³� ���ӽ��� ���빰�� �ʹ� ������ �� �ȿ� �ִ� ���� ��ȭ�� ����� �ν����� ���Ѵ�=>userObj ũ�� ���̱�
* npm run build ����(�ذ�)
    * ���� ������ ���� NweetFactoy�� ���ǵǾ����� �ʴ� �ؼ� �ڵ带 Ȯ���� ���� �� ���� import���� �ۼ����� �ʾҴ��� �߰��� �߰��ߴ�.
