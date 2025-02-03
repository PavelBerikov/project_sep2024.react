import {FC} from 'react';
import { IRecipe } from '../../interfaces/recipesInterface';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import Tag from "../tag/Tag.tsx";


type PropsType = {
    recipe: IRecipe;
};

const Recipe: FC<PropsType> = ({recipe}) => {
    const auth = useAppSelector(state => state.authSlice);
    const navigate = useNavigate();
    return (
        <div className={auth.loginUser ? 'recipeCard' : 'recipeCard blur'}>
            <h2 style={{cursor: 'pointer'}} onClick={() => {
                navigate(`/recipes/details/${recipe.id}`)
            }}>{recipe.id} -    {recipe.name}.</h2>
            {
                recipe.tags.map((tag, index) => <Tag key={index} tag={tag}/>)
            }

        </div>
    );
};

export default Recipe;