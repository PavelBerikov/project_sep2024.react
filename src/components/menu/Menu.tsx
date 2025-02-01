import  {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './menu.css'
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {authSlice} from "../../redux/slices/authSlice/authSlice.ts";

const Menu:FC = () => {
    const {loginUser} = useAppSelector(state => state.authSlice);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return (
        <header style={{width: '100vw'}}>
            {
                !loginUser &&
                <div style={{height:'100%', width: '100%', display:"flex", justifyContent: 'center'}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                        <p style={{fontSize: '30px'}} className={'dancing-script'}>Don't you see the content on the
                        page?</p>
                        <div>
                            <button onClick={() => {
                                navigate('/login')
                            }}>I can't see.</button>
                        </div>
                    </div>
                </div>
            }
            {
                loginUser &&
                <div className={'menu dancing-script'}>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/users'}>Users</Link></li>
                        <li><Link to={'/recipes'}>Recipes</Link></li>
                    </ul>
                    <div style={{display: "flex", margin: '0', gap: '20px'}}>
                        <div onClick={() => {
                            dispatch(authSlice.actions.deleteLoginUser())
                        }} className={'dancing-script'}
                        style={{cursor: "pointer", fontSize: '40px'}}>Logout</div>
                        <img className={'avatar'} src={loginUser.image} alt={loginUser.firstName}/>
                    </div>
                </div>
            }
        </header>
    );
};

export default Menu;