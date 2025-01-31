import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserDetailsPage from "../pages/UserDetailsPage.tsx";
import RecipesDetailsPage from "../pages/RecipesDetailsPage.tsx";
import RecipeSearchPage from "../pages/RecipeSearchPage.tsx";
import UserSearchPage from "../pages/UserSearchPage.tsx";
import SearchByTagPage from "../pages/SearchByTagPage.tsx";



export const router= createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {index:true,element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
        ]},
    {path: 'recipes', element: <RecipesPage/>},
    {path: 'users', element: <UsersPage/>},
    {path:'users/details/:id', element: <UserDetailsPage/>},
    {path:'recipes/details/:id', element: <RecipesDetailsPage/>},
    {path:'recipes/search', element: <RecipeSearchPage/>},
    {path: 'users/search', element: <UserSearchPage/>},
    {path: '/recipe/searchByTag/:tag', element: <SearchByTagPage/>}
]);

