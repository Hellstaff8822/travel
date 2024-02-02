import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`home-travel__heart ${isLiked ? 'liked' : ''}`} onClick={handleClick}>
      <FavoriteIcon style={{ color: isLiked ? 'red' : 'white' }} />
    </div>
  );
}