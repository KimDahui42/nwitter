import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STRAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
//���̾�̽� �ʱ�ȭ�� ���� firevase.initializeApp(firebassConfig)�� �ٸ� ���Ͽ��� ������ �ʿ䰡 �����ϱ� fbase.js ���� �ȿ��� �����ϵ��� �ڵ带 ����
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
//�α����� ���� ���, �ٸ� ���Ͽ��� �����Ѵ�. �̶� ���� ��� ���� ���̾�̽� ���� ����� �� ������ ���� ������ named export�� ������