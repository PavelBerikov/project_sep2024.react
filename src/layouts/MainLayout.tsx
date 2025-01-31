import {FC} from 'react';
import {Outlet} from "react-router-dom";

const MainLayout:FC = () => {
    return (
        <div>
            Main Layout
            <Outlet/>
        </div>
    );
};

export default MainLayout;