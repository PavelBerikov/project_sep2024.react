import  {FC} from 'react';
import backImage from '../assets/back.png';
const AuthHomePage:FC = () => {
    return (
        <div className={'backGround'} style={{backgroundImage:`url(${backImage})`}}>
        </div>
    );
};

export default AuthHomePage;