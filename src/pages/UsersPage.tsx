import  {FC} from 'react';
import Menu from "../components/menu/Menu.tsx";
import Users from '../components/users/Users';


const UsersPage:FC = () => {
    return (
        <div>
            <Menu/>
            <Users/>
        </div>
    );
};

export default UsersPage;