import  {FC} from 'react';
import {Link} from "react-router-dom";
import './menu.css'

const Menu:FC = () => {

    return (
        <header>


                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>

            {/*{
                loginUser &&
                <div>
                    <ul>
                        <li><Link to={loginUser ? '/auth' : '/'}>Home</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/users'}>Users</Link></li>
                        <li><Link to={'/recipes'}>Recipes</Link></li>
                    </ul>
                    <img src={loginUser.image} alt={loginUser.firstName}/>
                </div>
            }*/}
        </header>
    );
};

export default Menu;