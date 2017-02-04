import React from 'react';

const GifItem = (image) => {
  return (
    <div className="gif-item">
      <img alt={'whoops'} src={image.gif.images.downsized.url} />
    </div>
  );
};

export default GifItem;
