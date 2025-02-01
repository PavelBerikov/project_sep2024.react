import {FC} from 'react';
import LoginForm from "../components/loginForm/LoginForm.tsx";

const LoginPage:FC = () => {
    return (
        <div className={'loginPage'}>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;