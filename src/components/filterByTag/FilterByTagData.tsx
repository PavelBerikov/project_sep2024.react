import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useParams} from "react-router-dom";
import { useAppDispatch } from '../../hooks/useAppDispatch.tsx';
import { filterByTagSliceActions } from '../../redux/slices/filterByTagSlice/filterByTagSlice.ts';
import Recipe from "../recipe/Recipe.tsx";

const FilterByTagData:FC = () => {
    const {recipes} = useAppSelector(state => state.filterByTagSlice);
    const params = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (params.tag){
            dispatch(filterByTagSliceActions.getFilter(params.tag))
        }

    }, [params.tag,dispatch]);
    return (
        <div>
            {
                recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>)
            }
        </div>
    );
};

export default FilterByTagData;