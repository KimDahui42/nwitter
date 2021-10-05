import { authService,dbService } from "fbase";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
    const history = useHistory();

    const onLogoutClick = () => {
        authService.signOut();
        history.push("/");
    };


    return (
        <>
            <form>
                <input type="text" placeholder="Display name" />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogoutClick}>Log Out</button>
        </>
    );
};

export default Profile;