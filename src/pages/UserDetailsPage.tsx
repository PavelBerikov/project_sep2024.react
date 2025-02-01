import {FC} from 'react';
import UserDetails from '../components/userDetails/UserDetails';
import Menu from "../components/menu/Menu.tsx";
import backImage from "../assets/back.png";

const UserDetailsPage:FC = () => {
    return (
        <div className={'backGround'} style={{backgroundImage: `url(${backImage})`}} >
            <Menu/>
            <UserDetails/>
        </div>
    );
};

export default UserDetailsPage;