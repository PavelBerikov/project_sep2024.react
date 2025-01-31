import {FC} from 'react';
import {IUser} from "../../interfaces/userInterface.ts";
import {useNavigate} from "react-router-dom";

type PropsType = {
    user: IUser;
};

const User: FC<PropsType> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            navigate(`/users/details/${user.id}`)
        }}>
            {user.id} - {user.firstName}
        </div>
    );
};

export default User;