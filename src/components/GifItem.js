import React from 'react';

const GifItem = (image) => {
  return (
    <li>
      <img alt={'whoops'} src={image.gif.images.downsized.url} />
    </li>
  );
};

export default GifItem;
