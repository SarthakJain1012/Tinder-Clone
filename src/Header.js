import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { Link , useHistory} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Header( {BackButton} ) {
    const history = useHistory();
    return (
        <div className="header">
            {BackButton ? (
            <IconButton onClick={()=>{history.replace(BackButton)}}>
            <ArrowBackIosIcon className="header__icon" fontSize="large" />
            </IconButton>):
            (<IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>)}
            
            <Link to="/">
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png" alt="Tinder Logo"/>
            </Link>
            <Link to="/chat">
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    );
}

export default Header;