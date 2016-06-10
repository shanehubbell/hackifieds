import React from 'react';

const Filter = (props) => (
  <div>
    <h2>Filtering options here....</h2>
    <form onChange={props.handleFormChange}>
      <label>Private</label>
      <input
        type="checkbox" name="private" onChange={props.handlePrivateChange}
        value={props.options.private}
      />
      <label>Price</label>
      <input
        type="text" name="price" onChange={props.handlePriceChange}
        value={props.options.price}
      />
    </form>
  </div>
);

Filter.propTypes = {
  options: React.PropTypes.object,
  private: React.PropTypes.bool,
  price: React.PropTypes.string,
  handlePrivateChange: React.PropTypes.func,
  handlePriceChange: React.PropTypes.func,
  handleFormChange: React.PropTypes.func,
};

export default Filter;
