import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Spot = ({ spot }) => {
  const { spotName, countryName, location, photo } = spot;
  return (
    <div>
      <div className="card glass w-96 md:w-[400px] mx-auto">
        <figure>
          <img className="w-full h-[250px]" src={photo} alt="spot!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}</h2>
          <div className="flex flex-col space-y-3">
            <p className="font-semibold">Country Name: {countryName}</p>
            <p className="font-semibold">Location: {location}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/spot-details/${spot._id}`} >
              <button className="btn btn-primary">View Details!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;

Spot.propTypes = {
  spot: PropTypes.node,
  handleDeleteSpot: PropTypes.node
};
