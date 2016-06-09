import React from 'react';
import FileUpload from './FileUpload.jsx';
import TextForm from './TextForm.jsx';

import request from 'superagent';

class AddListing extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      price: '',
      bathrooms: '',
      private: false,
      ownerName: '',
      ownerEmail: '',
      description: '',
      pictures: [],
    };

    this.handleFileChange = this.handleFileChange.bind(this);

    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleBathroomsChange = this.handleBathroomsChange.bind(this);
    this.handlePrivateChange = this.handlePrivateChange.bind(this);

    this.handleOwnerNameChange = this.handleOwnerNameChange.bind(this);
    this.handleOwnerEmailChange = this.handleOwnerEmailChange.bind(this);

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleFileChange(fileName) {
    const newPictures = this.state.pictures;
    newPictures.push(fileName);
    this.setState({ pictures: newPictures });
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleBathroomsChange(event) {
    this.setState({ bathrooms: event.target.value });
  }

  handlePrivateChange(event) {
    this.setState({ private: event.target.checked });
  }

  handleOwnerNameChange(event) {
    this.setState({ ownerName: event.target.value });
  }

  handleOwnerEmailChange(event) {
    this.setState({ ownerEmail: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

// address: '',
//       price: '',
//       bathrooms: '',
//       private: false,
//       ownerName: '',
//       ownerEmail: '',
//       description: '',
//       pictures: [],

  handleSubmitForm() {
    request
      .post('/api/listings')
      .type('form')
      .send({ address: this.state.address })
      .send({ price: this.state.price })
      .send({ bathrooms: this.state.bathrooms })
      .send({ private: this.state.private })
      .send({ ownerName: this.state.ownerName })
      .send({ ownerEmail: this.state.ownerEmail })
      .send({ description: this.state.description })
      .send({ pictures: JSON.stringify(this.state.pictures) })
      .end((err, res) => {
      });
  }

  render() {
    return (<div> ADD LISTING COMPONENT
      <FileUpload handleFile={this.handleFileChange} />
      <TextForm
        address={this.state.address}
        price={this.state.price}
        bathrooms={this.state.bathrooms}
        private={this.state.private}
        ownerName={this.state.ownerName}
        ownerEmail={this.state.ownerEmail}
        description={this.state.description}

        handleAddressChange={this.handleAddressChange}
        handlePriceChange={this.handlePriceChange}
        handleBathroomsChange={this.handleBathroomsChange}
        handlePrivateChange={this.handlePrivateChange}
        handleOwnerNameChange={this.handleOwnerNameChange}
        handleOwnerEmailChange={this.handleOwnerEmailChange}
        handleDescriptionChange={this.handleDescriptionChange}

        pictures={this.state.pictures}
      />
      <button
        onClick={this.handleSubmitForm}
        type="submit"
        className="pure-button pure-button-primary"
      >Submit</button>
    </div>);
  }
}

export default AddListing;
