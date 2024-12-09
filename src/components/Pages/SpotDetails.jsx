import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const SpotDetails = () => {
  const { user } = useContext(AuthContext);
  const loadedspots = useLoaderData();
  const [spots, setSpots] = useState(loadedspots);
  const { id } = useParams();
  const spot = loadedspots.find((spot) => spot._id === id);
  console.log(spot);
  const navigate = useNavigate();
  const {
    spotName,
    countryName,
    location,
    description,
    cost,
    seasonality,
    visitors,
    photo,
    travel,
  } = spot;

  const handleDeleteSpots = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://diamond-vromon-server.vercel.app/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((spot) => spot._id === !_id);
              setSpots(remaining);
              navigate("/allSpot");
            }
          });
      }
    });
  };

  return (
    <div className="mt-10 mb-10">
      <h1 className="text-4xl text-blue-400 font-bold roboto-slab-uniquifier text-center mb-10">
        Explore the Unseen <br /> Journey Beyond the Ordinary
      </h1>
      <div className="card glass w-96 md:w-[600px] mx-auto">
        <figure>
          <img className="w-full h-[250px]" src={photo} alt="spot!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}</h2>
          <div className="md:flex justify-between ">
            <div className="flex flex-col">
              <p className="font-semibold">Country Name: {countryName}</p>
              <p className="font-semibold">Location: {location}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Description: {description}</p>
              <p className="font-semibold">Avarage Cost: {cost}</p>
            </div>
          </div>
          <div className="md:flex justify-between">
            <div className="flex flex-col">
              <p className="font-semibold">Seasonality: {seasonality}</p>
              <p className="font-semibold">Visitors: {visitors}</p>
            </div>
            <div>
              <p className="font-semibold">Travel: {travel}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to="/allSpot">
              <button className="btn btn-primary text-white">Go Back!</button>
            </Link>
            {user ? (
              <div className="space-x-2">
                <Link to={`/update/${spot._id}`}>
                  <button className="btn btn-ghost border border-black text-green-600">
                    Update Info!
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteSpots(spot._id)}
                  className="btn  text-red-600 btn-ghost border border-black"
                >
                  Delete Info!
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
SpotDetails.propTypes = {
  handleDeleteSpot: PropTypes.node,
};
