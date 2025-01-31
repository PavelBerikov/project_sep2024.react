import {FC} from 'react';
import LoginForm from "../components/loginForm/LoginForm.tsx";

const LoginPage:FC = () => {
    return (
        <div style={{position: 'fixed', zIndex: '10', top:'20%', left:'35%'}}>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;