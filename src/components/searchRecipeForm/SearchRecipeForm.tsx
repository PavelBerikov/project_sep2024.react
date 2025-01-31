import {FC} from 'react';
import {useForm} from "react-hook-form";
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import {searchSliceActions} from "../../redux/slices/searchSlice/searchSlice.ts";
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";

const SearchRecipeForm:FC = () => {
    const {handleSubmit, register} = useForm<{value: string}>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function foo(value:{value:string}) {
        dispatch(searchSliceActions.setWord(value.value))
        navigate(`/recipes/search`);
        dispatch(recipesSliceActions.resetRecipe())

    }

    return (
        <form onSubmit={handleSubmit(foo)}>
            <input type="text" placeholder={'search'} {...register('value')}/>
            <button>Go!</button>
        </form>
    );
};

export default SearchRecipeForm;