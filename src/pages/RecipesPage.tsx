import {FC} from 'react';
import Menu from "../components/menu/Menu.tsx";
import Recipes from '../components/recipes/Recipes.tsx';
import Pagination from "../components/pagination/Pagination.tsx";
import SearchRecipeForm from "../components/searchRecipeForm/SearchRecipeForm.tsx";
import backImage from "../assets/back2.jpeg";
import {useAppSelector} from "../hooks/useAppSelector.tsx";


const RecipesPage:FC = () => {
    const {loginUser} = useAppSelector(state => state.authSlice);
    const {responseRecipe} = useAppSelector(state => state.recipeSlice);
    const count =responseRecipe? responseRecipe.total - responseRecipe.skip : 21

    return (
        <div className={'backGround'} style={{backgroundImage: `url(${backImage})`}}>
            <Menu/>
            {
                loginUser&&
                <SearchRecipeForm/>
            }
            <Recipes/>
            <Pagination count={count}/>
        </div>
    );
};

export default RecipesPage;