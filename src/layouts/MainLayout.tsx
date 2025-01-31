import {FC} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";
import {useAppSelector} from "../hooks/useAppSelector.tsx";
import HomePage from "../pages/HomePage.tsx";
import AuthHomePage from "../pages/AuthHomePage.tsx";

const MainLayout:FC = () => {
    const {loginUser} = useAppSelector(state => state.authSlice);
    return (
        <div>
            <Menu/>
            <Outlet/>
            {
                !loginUser&&
                <HomePage/>
            }
            {
                loginUser&&
                <AuthHomePage/>
            }
        </div>
    );
};

export default MainLayout;