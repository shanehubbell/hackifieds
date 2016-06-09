import React from 'react';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<div>
      <form className="pure-form pure-form-stacked">
        <fieldset>
          <legend>Add Listing</legend>

          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-3">
              <label htmlFor="owner-name">Owner Name</label>
              <input
                id="owner-name"
                className="pure-u-23-24"
                type="text"
                value={this.props.ownerName}
                onChange={this.props.handleOwnerNameChange}
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <label htmlFor="owner-email">Owner Email</label>
              <input
                id="owner-email"
                className="pure-u-23-24"
                type="email"
                value={this.props.ownerEmail}
                onChange={this.props.handleOwnerEmailChange}
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                className="pure-u-23-24"
                type="text"
                value={this.props.address}
                onChange={this.props.handleAddressChange}
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                className="pure-u-23-24"
                type="text"
                value={this.props.price}
                onChange={this.props.handlePriceChange}
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <label htmlFor="bathrooms">Bathrooms</label>
              <input
                id="bathrooms"
                className="pure-u-23-24"
                type="text"
                value={this.props.bathrooms}
                onChange={this.props.handleBathroomsChange}
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3 pure-checkbox">
              <label htmlFor="Private">Private</label>
              <input
                id="Private"
                className="pure-u-23-24"
                type="checkbox"
                value={this.props.private}
                onChange={this.props.handlePrivateChange}
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <label htmlFor="Description">Description</label>
              <input
                id="Description"
                className="pure-u-23-24"
                type="text"
                value={this.props.description}
                onChange={this.props.handleDescriptionChange}
              />
            </div>
          </div>
        </fieldset>
      </form>
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
