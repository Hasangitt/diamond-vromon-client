import { useLoaderData } from "react-router-dom";


const MySpot = () => {
  const spots = useLoaderData()
  console.log(spots)
  return (
    <div>
      
    </div>
  );
};

export default MySpot;