import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2>Filtering options here....</h2>
        <form>
          <label>Private</label>
          <input
            type="checkbox" name="private" onChange={this.props.handlePrivateChange}
            value={this.props.options.private}
          />
        </form>
      </div>
    );
  }
}

export default Filter;
