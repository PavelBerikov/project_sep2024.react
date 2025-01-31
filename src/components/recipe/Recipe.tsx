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
    //const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div className={auth.loginUser ? 'recipeCard' : 'recipeCard blur'}>
            <div onClick={() => {
                // dispatch(recipesSliceActions.setId(recipe.id))
                navigate(`/recipes/details/${recipe.id}`)
            }}>{recipe.id} -    {recipe.name}</div>
            {
                recipe.tags.map((tag, index) => <Tag key={index} tag={tag}/>)
            }
            <hr/>
        </div>
    );
};

export default Recipe;