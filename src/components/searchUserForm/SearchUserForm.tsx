import {FC} from 'react';
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {useNavigate} from "react-router-dom";
import {searchSliceActions} from "../../redux/slices/searchSlice/searchSlice.ts";
import {usersSliceActions} from "../../redux/slices/usersSlice/usersSlice.ts";

const SearchUserForm:FC = () => {
    const {handleSubmit, register} = useForm<{value:string}>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function foo(value:{value:string}) {
        dispatch(searchSliceActions.setWord(value.value))
        navigate(`/users/search`);
        dispatch(usersSliceActions.resetUser())

    }
    return (
        <div>
            <form onSubmit={handleSubmit(foo)}>
                <input  type="text" placeholder={'search'} {...register('value')}/>
                <button style={{height: '36px', borderRadius: '10px'}}>Go!</button>
            </form>
        </div>
    );
};

export default SearchUserForm;