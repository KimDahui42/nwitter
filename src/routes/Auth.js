import { authService,firebaseInstance } from "fbase";
import AuthForm from "../components/AuthForm";

const Auth = () => {
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        //비동기 작업이기 때문에 `async-await`문을 사용한다.
    }
    return (
        <div>
            <AuthForm/>
            <div>
                <button onClick={onSocialClick} name="google">
                    Continue with Google
                </button>
                <button onClick={onSocialClick} name="github">
                    Continue with Github
                </button>
            </div>
        </div> 
        );
};

export default Auth;