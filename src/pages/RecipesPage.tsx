import {FC} from 'react';
import Menu from "../components/menu/Menu.tsx";
import Recipes from '../components/recipes/Recipes.tsx';

const RecipesPage:FC = () => {
    return (
        <div>
            <Menu/>
            <Recipes/>
        </div>
    );
};

export default RecipesPage;