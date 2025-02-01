import  {FC} from 'react';
import RecipeDetails from '../components/recipeDetails/RecipeDetails';
import Menu from "../components/menu/Menu.tsx";
import backImage from "../assets/back.png";

const RecipesDetailsPage:FC = () => {
    return (
        <div className={'backGround'} style={{backgroundImage: `url(${backImage})`}}>
            <Menu/>
            <RecipeDetails/>
        </div>
    );
};

export default RecipesDetailsPage;