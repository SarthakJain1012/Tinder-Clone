import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import "./SwipeButtons.css";

function SwipeButtons() {
    return (
        <div className="SwipeButtons">
            <IconButton className="SwipeButtons__repeat">
            <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="SwipeButtons__close">
            <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="SwipeButtons__star">
            <StarIcon fontSize="large"/>
            </IconButton>
            <IconButton className="SwipeButtons__favourite">
            <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="SwipeButtons__flash">
            <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;