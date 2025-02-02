import  {FC, useEffect} from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { recipesSliceActions } from '../redux/slices/recipesSlice/recipesSlice';
import SearchRecipeForm from '../components/searchRecipeForm/SearchRecipeForm.tsx';
import Recipe from '../components/recipe/Recipe';
import Menu from "../components/menu/Menu.tsx";
import backImage from "../assets/back5.jpeg";
import Pagination from "../components/pagination/Pagination.tsx";

const RecipeSearchPage:FC = () => {
    const {searchWord} = useAppSelector(state => state.searchSlice);
    const dispatch = useAppDispatch();
    const {recipes, recipe, responseRecipe} = useAppSelector(state => state.recipeSlice);
    const count = responseRecipe? responseRecipe.total : 1
    useEffect(() => {
        if (isNaN(Number(searchWord))){
            dispatch(recipesSliceActions.getRecipeBySearch(searchWord))
        }else {
            dispatch(recipesSliceActions.getRecipeById(searchWord))
        }
        console.log(recipes)
    }, [searchWord, dispatch]);
    return (
        <div className={'backGround'} style={{backgroundImage: `url(${backImage})`}}>
            <Menu/>
            <SearchRecipeForm/>
            {
                !recipe&&
                recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>)
            }
            {
                recipe&&
                <Recipe recipe={recipe} key={recipe.id}/>
            }
            <Pagination count={count}/>
        </div>
    );
};

export default RecipeSearchPage;