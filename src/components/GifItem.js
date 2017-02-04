import React from 'react';

const GifItem = (image) => {
  return (
    <li>
      <img alt={'whoops'} src={image.gif.url} />
    </li>
  );
};

export default GifItem;
