import {FC, useEffect} from 'react';
import {useAppDispatch} from "../hooks/useAppDispatch.tsx";
import {recipesSliceActions} from "../redux/slices/recipesSlice/recipesSlice.ts";
import {useAppSelector} from "../hooks/useAppSelector.tsx";

const HomePage:FC = () => {
    const dispatch = useAppDispatch();
    const {loginUser} = useAppSelector(state => state.authSlice);
    const {recipes} = useAppSelector(state => state.recipeSlice);
    useEffect(() => {
        dispatch(recipesSliceActions.getRecipes({limit: 6, skip:0}))
    }, [dispatch]);
    return (
        <div className={'blur'}>
            {
                !loginUser&&
                recipes.map(recipe => <div style={{display:"flex", flexDirection: "column", fontSize: '25px'}}>
                    <img src={recipe.image} alt={recipe.name} key={recipe.id}/>
                    <div>{recipe.name}</div>
                </div>)
            }
        </div>
    );
};

export default HomePage;