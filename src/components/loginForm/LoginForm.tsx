import {useForm} from "react-hook-form";
import { IAuth } from "../../interfaces/authInterface";
import { authSliceActions } from "../../redux/slices/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const LoginForm = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const onSubmit = (user: IAuth) => {
        dispatch(authSliceActions.loginUser(user))
        navigate('/')
    }
    return (
        <div style={{background: "royalblue", width: "400px", height: "400px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='username' {...register('username')} />
                <input type="text" placeholder='password' {...register('password')} />
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;