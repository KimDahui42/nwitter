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
//파이어베이스 초기화를 위한 firevase.initializeApp(firebassConfig)는 다른 파일에서 참조할 필요가 없으니깐 fbase.js 파일 안에서 실행하도록 코드를 수정
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
//로그인을 위해 사용, 다른 파일에서 참조한다. 이때 인증 모듈 외의 파이어베이스 관련 모듈을 더 내보낼 수도 있으니 named export를 적용함