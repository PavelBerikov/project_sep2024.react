import {FC} from 'react';
import { useSearchParams } from 'react-router-dom';

const Pagination: FC = () => {
    const [query, setQuery] = useSearchParams({page: '1', skip:'0'});
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
    return (
        <div>
            <button disabled={query.get('page') === '1'} onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    );
};

export default Pagination;