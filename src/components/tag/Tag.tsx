import {FC} from 'react';
import {Link} from "react-router-dom";

type PropsType = {
    tag: string;
};

const Tag: FC<PropsType> = (tag) => {
    return (
        <div>
            <Link to={`/recipe/searchByTag/${tag.tag}`}>{tag.tag}</Link>
        </div>
    );
};

export default Tag;