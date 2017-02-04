import React from 'react';

// using destructuring to access 'gif' and 'onGifSelect' directly from props
const GifItem = ({ gif, onGifSelect }) => {
  return (
    <div className="gif-item" onClick={ () => onGifSelect(gif) }>
      <img alt={'whoops'} src={gif.images.downsized.url} />
    </div>
  );
};

export default GifItem;
