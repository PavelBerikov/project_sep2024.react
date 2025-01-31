import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../../redux/slices/usersSlice/usersSlice.ts";
import User from '../user/User.tsx';
import { useSearchParams } from 'react-router-dom';
import Pagination from "../pagination/Pagination.tsx";
import SearchUserForm from "../searchUserForm/SearchUserForm.tsx";


const Users:FC = () => {
    const {users} = useAppSelector(state => state.usersSlice);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const page = parseInt(query.get('page') || '1');
    const skip = parseInt(query.get('skip') || '0');
    const limit = 20;
    useEffect(() => {
        dispatch(usersSliceActions.getUsers({skip, limit}))
        console.log(users)
    }, [dispatch, page]);
    return (
        <div>
            <SearchUserForm/>
            {
               users.map(user => <User key={user.id} user={user}/>)
            }
            <Pagination/>
        </div>
    );
};

export default Users;