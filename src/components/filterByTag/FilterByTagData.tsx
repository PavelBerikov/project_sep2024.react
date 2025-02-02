import {FC, useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useParams} from "react-router-dom";
import { useAppDispatch } from '../../hooks/useAppDispatch.tsx';
import { filterByTagSliceActions } from '../../redux/slices/filterByTagSlice/filterByTagSlice.ts';
import Recipe from "../recipe/Recipe.tsx";
import Pagination from "../pagination/Pagination.tsx";

const FilterByTagData:FC = () => {
    const {recipes, response} = useAppSelector(state => state.filterByTagSlice);
    const params = useParams();
    const dispatch = useAppDispatch();
    const count = response? response.total - response.skip : 21
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
            <Pagination count={count}/>
        </div>
    );
};

export default FilterByTagData;