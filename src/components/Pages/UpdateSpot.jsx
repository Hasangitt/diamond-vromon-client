import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateSpot = () => {
  const loadedSpot = useLoaderData();
  const navigate = useNavigate();
  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const travel = form.travel.value;
    const visitors = form.visitors.value;
    const photo = form.photo.value;
    const spot = {
      email,
      name,
      spotName,
      countryName,
      location,
      description,
      cost,
      seasonality,
      travel,
      visitors,
      photo,
    };
    console.log(spot);
    fetch(`https://diamond-vromon-server.vercel.app/spots/${loadedSpot._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("information update");
        navigate("/all-spot");
      });
  };
  return (
    <div className="md:w-3/4 mx-auto">
      <div className="hero mb-10 mt-10 bg-blue-50 rounded-lg min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-blue-950">
            <h1 className="text-4xl font-bold roboto-slab-uniquifier mb-8">
              If you wish to update your information, please update it here!
            </h1>
          </div>
          <div className="card bg-white w-full md:max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleUpdateSpot} className="card-body">
              <div className="md:flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      User Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      User Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="user name"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Tourist Spot Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="spotName"
                    placeholder="spot name"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Country Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="countryName"
                    placeholder="country name"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Spot Location
                    </span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="spot location"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Spot Description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="spot description"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Average Cost
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cost"
                    placeholder="average cost"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Spot Seasonality
                    </span>
                  </label>
                  <input
                    type="text"
                    name="seasonality"
                    placeholder="spot seasonality"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Travel Times
                    </span>
                  </label>
                  <input
                    type="text"
                    name="travel"
                    placeholder="travel time"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Visitors Per Year
                    </span>
                  </label>
                  <input
                    type="text"
                    name="visitors"
                    placeholder="total visitors per year"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black roboto-slab-uniquifier">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered text-black bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="submit"
                    value="Update Spot"
                    placeholder="photo url"
                    className="input input-bordered text-black roboto-slab-uniquifier cursor-pointer bg-white hover:border-blue-300"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSpot;
