import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {useSearchParams} from "react-router-dom";
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";
import Recipe from '../recipe/Recipe.tsx';

const Recipes:FC = () => {
    const {recipes} = useAppSelector(state => state.recipeSlice);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const page = parseInt(query.get('page') || '1');
    const skip = parseInt(query.get('skip') || '0');
    const limit = 20;
    useEffect(() => {
        dispatch(recipesSliceActions.getRecipes({skip, limit}))
    }, [dispatch, page]);
    return (
        <div style={{display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)'}}>

            {
                recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>)
            }

        </div>
    );
};

export default Recipes;