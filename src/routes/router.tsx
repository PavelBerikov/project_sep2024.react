import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";



export const router= createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {index:true,element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
        ]},
    {path: 'recipes', element: <RecipesPage/>},
    {path: 'users', element: <UsersPage/>}


   /* {path: '/', element: <MainLayout/>},
    {path: '/login', element: <LoginPage/>},
    {path:'/auth', element: <AuthHomePage/>, children:[
            {path: 'recipes', element: <RecipesPage/>},
            {path: 'users', element: <UsersPage/>},
            {path:'recipes/search', element: <SearchPage/>}
        ]},
    {path:'users/details/:id', element: <UserDetailsPage/>},
    {path:'recipes/details/:id', element: <RecipesDetailsPage/>},
    {path: '/recipe/searchByTag/:tag', element: <SearchByTagPage/>}*/

]);

