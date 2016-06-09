import React from 'react';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<div>
      <input
        type="text"
        value={this.props.ownerEmail}
        onChange={this.props.handleOwnerEmailChange}
      />
      <input
        type="text"
        value={this.props.price}
        onChange={this.props.handlePriceChange}
      />
      <input
        type="text"
        value={this.props.address}
        onChange={this.props.handleAddressChange}
      />
    </div>);
  }
}

TextForm.propTypes = {
  ownerEmail: React.PropTypes.string,
  price: React.PropTypes.string,
  address: React.PropTypes.string,

  handleOwnerEmailChange: React.PropTypes.func,
  handlePriceChange: React.PropTypes.func,
  handleAddressChange: React.PropTypes.func,
};

export default TextForm;
