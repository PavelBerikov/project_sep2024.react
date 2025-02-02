import {FC, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

type PaginationProps = {
    count: number;
}

const Pagination: FC<PaginationProps> = ({count}) => {
 /*   const {response} = useAppSelector(state => state.usersSlice);
    const {responseRecipe} = useAppSelector(state => state.recipeSlice);*/
    const [query, setQuery] = useSearchParams({page: '1', skip:'0'});
    /*const count1 = response? response.total - response.skip : 0
    const count2 = responseRecipe? responseRecipe.total - responseRecipe.skip: 0*/

    const prev = () => {
        const page = query.get('page');
        const skip = query.get('skip');
        if (page && skip) {
            let curPage = +page;
            const curSkip = +skip;
            setQuery({page: (--curPage).toString(), skip: (curSkip-20).toString()});
        }
    }
    const next = () => {
        const page = query.get('page');
        const skip = query.get('skip');
        if (page && skip) {
            let curPage = parseInt(page);
            const curSkip = +skip;
            setQuery({page: (++curPage).toString(), skip: (curSkip+20).toString()});
        }
    }
    useEffect(() => {

    }, []);
    return (
        <div>
            <button disabled={query.get('page') === '1'} onClick={prev}>Prev</button>
            <button disabled={count < 20}  onClick={next}>Next</button>
        </div>
    );
};

export default Pagination;