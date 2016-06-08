import React from 'react';
import FileUpload from './FileUpload.jsx';
import TextForm from './TextForm.jsx';

import request from 'superagent';

class AddListing extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      ownerEmail: '',
      price: '',
      pictures: [

      ],
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleOwnerEmailChange = this.handleOwnerEmailChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleFileChange(fileName) {
    const newPictures = this.state.pictures;
    newPictures.push(fileName);
    this.setState({ pictures: newPictures });
  }

  handleOwnerEmailChange(event) {
    this.setState({ ownerEmail: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  handleSubmitForm() {
    request
      .post('/api/listings')
      .type('form')
      .send({ ownerEmail: this.state.ownerEmail })
      .send({ price: this.state.price })
      .send({ address: this.state.address })
      .send({ pictures: JSON.stringify(this.state.pictures) })
      .end((err, res) => {
      });
  }

  render() {
    return (<div> ADD LISTING COMPONENT
      <FileUpload handleFile={this.handleFileChange} />
      <TextForm
        ownerEmail={this.state.ownerEmail}
        price={this.state.price}
        address={this.state.address}

        handleOwnerEmailChange={this.handleOwnerEmailChange}
        handlePriceChange={this.handlePriceChange}
        handleAddressChange={this.handleAddressChange}

        pictures={this.state.pictures}
      />
      <button onClick={this.handleSubmitForm} >Submit</button>
    </div>);
  }
}

export default AddListing;
