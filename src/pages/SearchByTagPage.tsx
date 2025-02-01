import {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch} from "../hooks/useAppDispatch.tsx";
import {filterByTagSliceActions} from "../redux/slices/filterByTagSlice/filterByTagSlice.ts";
import FilterByTagData from "../components/filterByTag/FilterByTagData.tsx";
import Menu from "../components/menu/Menu.tsx";
import backImage from "../assets/back7.jpeg";


const SearchByTagPage:FC = () => {
    const [tags, setTags] = useState<string[]>([])
    const dispatch = useAppDispatch();
    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tags').then(value => value.json())
            .then(value => setTags(value))
    }, []);
    return (
        <div className={'backGround'} style={{backgroundImage: `url(${backImage})`}}>
            <Menu/>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)'}}>
                {
                    tags.map((tag, index) => <Link onClick={() => {
                        dispatch(filterByTagSliceActions.setTag(tag))
                    }} key={index} to={`/recipe/searchByTag/${tag}`}>{tag}</Link>)
                }
            </div>
            <hr/>
            <FilterByTagData/>
        </div>
    );
};

export default SearchByTagPage;