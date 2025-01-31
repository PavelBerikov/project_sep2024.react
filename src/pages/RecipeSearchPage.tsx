import  {FC, useEffect} from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { recipesSliceActions } from '../redux/slices/recipesSlice/recipesSlice';
import SearchRecipeForm from '../components/searchRecipeForm/SearchRecipeForm.tsx';
import Recipe from '../components/recipe/Recipe';

const RecipeSearchPage:FC = () => {
    const {searchWord} = useAppSelector(state => state.searchSlice);
    const dispatch = useAppDispatch();
    const {recipes, recipe} = useAppSelector(state => state.recipeSlice);
    useEffect(() => {
        if (isNaN(Number(searchWord))){
            dispatch(recipesSliceActions.getRecipeBySearch(searchWord))
        }else {
            dispatch(recipesSliceActions.getRecipeById(searchWord))
        }
        console.log(recipes)
    }, [searchWord, dispatch]);
    return (
        <div>
            <SearchRecipeForm/>
            {
                !recipe&&
                recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>)
            }
            {
                recipe&&
                <Recipe recipe={recipe} key={recipe.id}/>
            }
        </div>
    );
};

export default RecipeSearchPage;