import React from 'react';

// need the number of images, so we can
// replace XXX in className below
const imageView = (props) => (
  <img
    src={props.image}
    alt
    key={props.image}
  />
);

export default imageView;
