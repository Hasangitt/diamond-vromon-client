import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";
import { useEffect, useState } from "react";


const AllSpots = () => {
  const spots = useLoaderData();
  console.log(spots);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false)
    }, 1000);
  }, []);

  return (
    <div className="md:w-5/7 lg:w-5/6 mx-auto mb-10">
      <div className="mt-10 mb-10">
        <h1 className="text-4xl text-center roboto-slab-uniquifier text-blue-400 font-bold">
          Explore the World <br /> Your Journey Awaits!
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {spots.map((spot) => (
            <Spot key={spot._id} spot={spot}></Spot>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSpots;
