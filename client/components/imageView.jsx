import React from 'react';

// need the number of images, so we can
// replace XXX in className below
const imageView = (props) => (
  <div className='pure-u-1 pure-u-md-1-3'>
	<img
		src={props.image}
		alt
	    key={props.image}
	  />
  </div>
);

export default imageView;
