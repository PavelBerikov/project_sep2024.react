import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";
import {Link, useParams} from "react-router-dom";
import Tag from "../tag/Tag.tsx";

const RecipeDetails:FC = () => {
    const {loginUser} = useAppSelector(state => state.authSlice);
    const {recipe} = useAppSelector(state => state.recipeSlice);
    const params = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (params.id){
            dispatch(recipesSliceActions.getRecipeById(params.id))
        }
    }, [params.id, dispatch]);
    return (
        <div>
            {
                recipe &&
                <div className={loginUser? 'recipeDetails' : 'recipeDetails blur'}>
                    <img src={recipe.image} alt={recipe.name}/>
                   <div style={{background: 'rgba(255, 255, 255, 0.5)', borderRadius: '20px', marginRight: '50px'}}>
                       <h1>{recipe.name}</h1>
                        <Link to={`/users/details/${recipe.userId}`}><b>This recipe belongs to the user with
                            ID {recipe.userId}</b></Link>
                       <h3>Ingredients:</h3>
                       <p>{recipe.ingredients.join(', ')}</p>
                       <h3>instructions:</h3>
                       <p>{recipe.instructions.join(' ')}</p>
                       <b>Prep time</b> - {recipe.prepTimeMinutes} min
                       <br/>
                       <b>Cook time</b> - {recipe.cookTimeMinutes}
                       <div>
                           <b>Tags:</b>
                           {
                               recipe.tags.map((tag, index) => <Tag tag={tag} key={index}/>)
                           }
                       </div>
                   </div>
                </div>
            }
        </div>
    );
};

export default RecipeDetails;