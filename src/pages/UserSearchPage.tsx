import {FC, useEffect} from 'react';
import {useAppSelector} from "../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../redux/slices/usersSlice/usersSlice.ts";
import SearchUserForm from "../components/searchUserForm/SearchUserForm.tsx";
import User from "../components/user/User.tsx";
import Menu from "../components/menu/Menu.tsx";
import backImage from "../assets/back5.jpeg";

const UserSearchPage:FC = () => {
    const {searchWord} = useAppSelector(state => state.searchSlice);
    const dispatch = useAppDispatch();
    const {users, user} = useAppSelector(state => state.usersSlice);
    useEffect(() => {
        if (isNaN(Number(searchWord))){
            dispatch(usersSliceActions.getUserBySearch(searchWord))
        }else {
            dispatch(usersSliceActions.getUser(searchWord))
        }
        console.log(users)
    }, [searchWord, dispatch]);
    return (
        <div className={'backGround'} style={{backgroundImage: `url(${backImage})`}}>
            <Menu/>
            <SearchUserForm/>
            {
                !user&&
                users.map(user => <User user={user} key={user.id}/>)
            }
            {
                user&&
                <User user={user} key={user.id}/>
            }

        </div>
    );
};

export default UserSearchPage;