import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen">
           <div className="text-center roboto-slab-uniquifier flex flex-col">
            <img className="w-[250px] mx-auto" src="https://i.ibb.co.com/SXJ6jYt/opppos-removebg-preview.png" alt="" />
           <h1 className="text-3xl text-red-500 font-semibold">Oops! We couldn’t find what you were looking for. <br /> Try searching for something else!</h1>
           <Link to="/"><button className="btn bg-transparent text-green-500 text-xl font-bold mt-10 hover:bg-blue-500 hover:text-white">Go Home?</button></Link>
           </div>
        </div>
    );
};

export default Error;

