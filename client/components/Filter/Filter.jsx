import React from 'react';

const Filter = (props) => (
  <div>
    <form className="pure-form pure-form-stacked" onChange={props.handleFormChange}>
      <fieldset>
        <legend>Filter hacker spaces </legend>

        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2">
            <label>Max Price</label>
            <input
              type="text" name="price" onChange={props.handlePriceChange}
              className="pure-u-23-24" value={props.options.price}
            />
          </div>

          <div className="pure-u-1 pure-u-md-1-2">
            <label>Distance (Miles) to Hack Reactor</label>
            <input
              type="text" name="price" onChange={props.handleDistanceChange}
              className="pure-u-23-24" value={props.options.distance}
            />
          </div>
        </div>

        <label className="pure-checkbox">
          Check for Private Room
          <input
            type="checkbox" name="private" onChange={props.handlePrivateChange}
            className="pure-u-23-24 pure-checkbox" value={props.options.private}
          />
        </label>

      </fieldset>
    </form>
    <input
      name="price" onClick={props.handleClearFilters}
      className="pure-button" value="Clear filters"
    />
  </div>
);

Filter.propTypes = {
  options: React.PropTypes.object,
  private: React.PropTypes.bool,
  price: React.PropTypes.string,
  handlePrivateChange: React.PropTypes.func,
  handlePriceChange: React.PropTypes.func,
  handleFormChange: React.PropTypes.func,
  handleDistanceChange: React.PropTypes.func,
  handleClearFilters: React.PropTypes.func,
};

export default Filter;
