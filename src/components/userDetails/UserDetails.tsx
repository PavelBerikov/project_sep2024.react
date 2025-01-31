import {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {usersSliceActions} from "../../redux/slices/usersSlice/usersSlice.ts";
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import Recipe from '../recipe/Recipe.tsx';
import {recipesSliceActions} from "../../redux/slices/recipesSlice/recipesSlice.ts";

const UserDetails:FC = () => {
    const {recipes} = useAppSelector(state => state.recipeSlice);
    const {id} = useParams();
    const {user} = useAppSelector(state => state.usersSlice);
    const dispatch = useAppDispatch();
    const filteredRecipes = recipes.filter(value => value.userId === Number(id));

    useEffect(() => {
        if (id){
            dispatch(recipesSliceActions.getRecipes({limit:20, skip:0}))
            dispatch(usersSliceActions.getUser(id))
        }
        console.log(filteredRecipes)
    }, [id, dispatch]);
    return (
        <div>
            {
                user&&
                <div>
                    <div>{user.id} - {user.firstName} {user.lastName}</div>
                    <img src={user.image} alt={user.firstName}/>
                </div>
            }
            {
                filteredRecipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
            }

        </div>
    );
};

export default UserDetails;