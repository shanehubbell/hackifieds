import React from 'react';

const Filter = (props) => (
  <div>
    <h2>Filtering options here....</h2>
    <form onChange={props.updateFilter}>
      <input type="checkbox" name="private" /><label>Private</label>
    </form>
  </div>
);

export default Filter;
