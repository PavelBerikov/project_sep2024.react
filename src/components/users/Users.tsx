import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../../redux/slices/usersSlice/usersSlice.ts";
import User from '../user/User.tsx';
import { useSearchParams } from 'react-router-dom';


const Users:FC = () => {
    const {users} = useAppSelector(state => state.usersSlice);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const page = parseInt(query.get('page') || '1');
    const skip = parseInt(query.get('skip') || '0');
    const limit = 20;
    useEffect(() => {
        dispatch(usersSliceActions.getUsers({skip, limit}))
    }, [dispatch, page]);
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>

            {
               users.map(user => <User key={user.id} user={user}/>)
            }

        </div>
    );
};

export default Users;