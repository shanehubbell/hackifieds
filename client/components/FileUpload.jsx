const React = require('react');
// const Dropzone = require('react-dropzone');
// const request = require('superagent');


class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    const Dropzone = window.Dropzone;
    const dropzone = new Dropzone('#dropzone', { url: '/api/images' });
    dropzone.on('success', (err, res) => {
      console.dir(`image name: ${res}`);
      this.props.handleFile(res);
    });
  }

  render() {
    return (
      <div>
        <div id="dropzone" className="dropzone"> </div>
      </div>
    );
  }
}

FileUpload.propTypes = {
  handleFile: React.PropTypes.func,
};

export default FileUpload;
