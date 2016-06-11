import React from 'react';
import { Link } from 'react-router';

// Broke these icons into individual components to keep length in SideBarEntry
// to a minimum
const DollarIcon = () => (
  <img className="icons-svg" alt="dollar icon" src="assets/icons/dollar.svg" />
);

const BathroomIcon = () => (
  <img className="icons-svg" alt="bathroom icon" src="assets/icons/bathroom.svg" />
);

const BedIcon = () => (
  <img className="icons-svg" alt="singlebed icon" src="assets/icons/private.svg" />
);

const BunkIcon = () => (
  <img className="icons-svg" alt="bunkbed icon" src="assets/icons/shared.svg" />
);

const MapIcon = () => (
  <img className="icons-svg" alt="map icon" src="assets/icons/distance.svg" />
);

const HouseIcon = () => (
  <img className="icons-svg" alt="house icon" src="assets/icons/house.svg" />
);

const SidebarEntry = (props) => {
  const listing = props.listing; // All data associated with listing
  const numOfBathrooms = `${listing.bathrooms} bathroom${listing.bathrooms > 1 ? 's' : ''}`;
  const distance = listing.distanceToHackReactor.miles;
  const privateRoom = {
    fontIcon: listing.private ? <BedIcon /> : <BunkIcon />,
    text: `${listing.private ? 'Private' : 'Shared'} Room`,
  };

  return (
    <Link to={`/listing-detail/${listing.listingId}`}>
      <div className="pure-g tableViewItem" key={listing.listingId} onClick={props.onClick}>
        <div className="pure-g">
          <img
            className="table-image pure-u-1-3 pure-img"
            alt="" src={`images/${listing.pictures[0]}`}
          />
        </div>
        <div className="pure-g">
          <div className="icons pure-u-1-3">
            <p>
              <DollarIcon />{listing.price}
            </p>
            <p>
              <MapIcon />{distance} to Hack Reactor
            </p>
            <p>
              <HouseIcon />{listing.address}
            </p>
            <p>
              {privateRoom.fontIcon}{privateRoom.text}
            </p>
            <p>
              <BathroomIcon />{numOfBathrooms}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

SidebarEntry.propTypes = {
  listing: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

export default SidebarEntry;
