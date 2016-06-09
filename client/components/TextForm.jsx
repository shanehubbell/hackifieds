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
        value={this.props.ownerName}
        onChange={this.props.handleOwnerNameChange}
      />
      <input
        type="text"
        value={this.props.ownerEmail}
        onChange={this.props.handleOwnerEmailChange}
      />
      <input
        type="text"
        value={this.props.address}
        onChange={this.props.handleAddressChange}
      />
      <input
        type="text"
        value={this.props.price}
        onChange={this.props.handlePriceChange}
      />
      <input
        type="text"
        value={this.props.bathrooms}
        onChange={this.props.handleBathroomsChange}
      />
      <input
        type="checkbox"
        value={this.props.private}
        onChange={this.props.handlePrivateChange}
      />
      <input
        type="text"
        value={this.props.description}
        onChange={this.props.handleDescriptionChange}
      />
    </div>);
  }
}

TextForm.propTypes = {
  ownerEmail: React.PropTypes.string,
  ownerName: React.PropTypes.string,
  price: React.PropTypes.string,
  address: React.PropTypes.string,
  bathrooms: React.PropTypes.string,
  description: React.PropTypes.string,
  private: React.PropTypes.bool,

  handleOwnerEmailChange: React.PropTypes.func,
  handlePriceChange: React.PropTypes.func,
  handleAddressChange: React.PropTypes.func,
  handleOwnerNameChange: React.PropTypes.func,
  handleBathroomsChange: React.PropTypes.func,
  handlePrivateChange: React.PropTypes.func,
  handleDescriptionChange: React.PropTypes.func,
};

export default TextForm;
