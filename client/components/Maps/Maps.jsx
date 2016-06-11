import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import { connect } from 'react-redux';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // bounds: null,
      center: {
        lat: 37.7835896,
        lng: -122.4092149,
      },
    };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleViewChanged = this.handleViewChanged.bind(this);
  }

  handleViewChanged() {
    this.setState({
      bounds: this._googleMapComponent.getBounds(),
      center: this._googleMapComponent.getCenter(),
    });
  }

  handleMapClick(e) {
    // use this to close the info window...
  }

  handleMarkerClick(marker) {
    marker.showInfo = true;
    console.log('marker clicked-->', marker);
    this.setState(this.state);
  }

  handleMarkerClose(marker) {
    marker.showInfo = false;
    console.log('marker closed-->', marker);
    this.setState(this.state);
  }

  renderInfoWindow(ref, marker) {
    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClick.bind(this, marker)}
      >
        <div className="markerBox">
          Listing info should go here...
        </div>
      </InfoWindow>
    );
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map)}
            defaultZoom={10}
            center={this.state.center}
            onClick={this.handleMapClick}
            onBoundsChanged={this.handleViewChanged}
          >
            {Object.keys(this.props.markers).map((listingId, index) => {
              const marker = this.props.markers[listingId];
              const ref = `marker_${index}`;
              return (
                <Marker
                  {...marker}
                  position={
                    { lat: marker.lat, lng: marker.lng }
                  }
                  key={listingId}
                  ref={ref}
                  onClick={this.handleMarkerClick.bind(this, marker)}
                >
                  {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
                </Marker>
              );
            })}
          </GoogleMap>
        }
      />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    markers: state.filteredListings,
  };
};

Maps.propTypes = {
  markers: React.PropTypes.object,
};

export default connect(mapStateToProps)(Maps);
