import React from 'react';

// need the number of images, so we can
// replace XXX in className below
const imageView = (props) => (
  <div className="pure-u-1 pure-u-md-1-XXX pure-img">
    <img
		src={props.listing.listingId.image}
    />
  </div>
);

export default imageView;
