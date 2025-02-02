import  {FC} from 'react';
import Menu from "../components/menu/Menu.tsx";
import Users from '../components/users/Users';
import SearchUserForm from "../components/searchUserForm/SearchUserForm.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import backImage from "../assets/back.png";
import {useAppSelector} from "../hooks/useAppSelector.tsx";


const UsersPage:FC = () => {
    const {loginUser} = useAppSelector(state => state.authSlice);
    const {response} = useAppSelector(state => state.usersSlice);
    const count = response? response.total - response.skip : 21
    return (
        <div className={'backGround'} style={{backgroundImage: `url(${backImage})`}}>
            <Menu/>
            {
                loginUser&&
                <SearchUserForm/>}
            <Users/>
            <Pagination count={count}/>
        </div>
    );
};

export default UsersPage;