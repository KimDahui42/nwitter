import { authService,dbService } from "fbase";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { doc } from "firebase/firestore";

const Profile = ({ userObj,refreshUser }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [newBio,setNewBio]=useState("");
    const [isChanging, setIsChanging] = useState(false);
    const onNicknameClick = () => setIsChanging((prev)=>!prev);

    useEffect(() => {
        newBio=doc()
    });

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };

    const onLogoutClick = () => {
        authService.signOut();
        history.push("/");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({ displayName: newDisplayName });
            refreshUser();
        }
    };


    return (
        <div className="container">
            <button type="button" onClick={onNicknameClick}>프로필 수정</button>
            {isChanging ? (
                <form onSubmit={onSubmit} className="profileForm">
                    <input
                        onChange={onChange}
                        type="text"
                        placeholder="Display name"
                        value={newDisplayName}
                        autoFocus
                        className="formInput"
                    />
                    <input
                        type="submit"
                        value="Update Profile"
                        className="formBtn"
                        style={{
                            marginTop: 10,
                        }}
                    />
                </form>
            ) : (
                <section>
                    <div>{newDisplayName}</div>
                    <div>{}</div>
                    </section>
                    )
                }
            <span className="formBtn cancelBtn logOut" onClick={onLogoutClick}>
                Log Out
            </span>
        </div>
    );
};

export default Profile;