import {FC} from 'react';
import {IUser} from "../../interfaces/userInterface.ts";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector.tsx";

type PropsType = {
    user: IUser;
};

const User: FC<PropsType> = ({user}) => {
    const navigate = useNavigate();
    const {loginUser} = useAppSelector(state => state.authSlice);
    return (
        <div className={loginUser? 'usersCard': 'usersCard blur'} onClick={() => {
            navigate(`/users/details/${user.id}`)
        }}>
            <h2>{user.id} - {user.firstName}</h2>
        </div>
    );
};

export default User;