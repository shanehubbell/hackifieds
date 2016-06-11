import React from 'react';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (<div>
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-3">
          <label htmlFor="owner-name"><h2>Owner Name</h2></label>
          <input
            id="owner-name"
            placeholder="Enter your name"
            className="pure-u-23-24"
            type="text"
            value={this.props.ownerName}
            onChange={this.props.handleOwnerNameChange}
            required
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-3">
          <label htmlFor="owner-email"><h2>Owner Email</h2></label>
          <input
            id="owner-email"
            placeholder="Enter a valid email address"
            className="pure-u-23-24"
            type="email"
            value={this.props.ownerEmail}
            onChange={this.props.handleOwnerEmailChange}
            required
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-3">
          <label htmlFor="address"><h2>Address</h2></label>
          <input
            id="address"
            placeholder="E.g. 944 Market St, San Francisco, CA"
            className="pure-u-23-24"
            type="text"
            value={this.props.address}
            onChange={this.props.handleAddressChange}
            required
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-3">
          <label htmlFor="price"><h2>Monthly Rent</h2></label>
          <input
            id="price"
            placeholder="Enter a reasonable price"
            className="pure-u-23-24"
            type="number"
            min="0"
            value={this.props.price}
            onChange={this.props.handlePriceChange}
            required
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-3">
          <label htmlFor="bathrooms"><h2>Bathrooms</h2></label>
          <input
            id="bathrooms"
            placeholder="How many bathrooms are there?"
            className="pure-u-23-24"
            type="number"
            min="0"
            step="0.5"
            value={this.props.bathrooms}
            onChange={this.props.handleBathroomsChange}
            required
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-3 pure-checkbox">
          <label htmlFor="Private"><h2>Check if Private</h2></label>
          <input
            id="Private"
            className="pure-u-23-24"
            type="checkbox"
            value={this.props.private}
            onChange={this.props.handlePrivateChange}
          />
        </div>
        <div className="pure-u-1 pure-u-md-1-3">
          <label htmlFor="Description"><h2>Description</h2></label>
          <textarea
            placeholder="Write a brief but descriptive and informative
            summary of the room and the house! Try to include things like
            the ammenities, the people living there, atmosphere, nearby
            awesome places, etc..."
            id="Description"
            rows="6"
            className="pure-u-23-24"
            type="text"
            value={this.props.description}
            onChange={this.props.handleDescriptionChange}
          />
        </div>
      </div>
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
