import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import '../SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className='swipeButton'>
            <IconButton>
               <ReplayIcon fontSize='large' className='swipedButton__replay' /> 
            </IconButton>
            <IconButton>
                <CloseIcon fontSize='large' className='swipedButton__close' />
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize='large' className='swipedButton__star' />
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large' className='swipedButton__fav' />
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize='large'className='swipedButton__flash' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
