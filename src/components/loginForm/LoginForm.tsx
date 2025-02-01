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
        <div className="loginCard">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Username:</h3>
                <input  type="text" placeholder='username' {...register('username')} />
                <br/>
                <h3>Password:</h3>
                <input  type="text" placeholder='password' {...register('password')} />
                <br/>
                <button>Login</button>
                <h2 className={'dancing-script'} style={{margin: '50px'}}>For access, please log in.</h2>
            </form>
        </div>
    );
};

export default LoginForm;