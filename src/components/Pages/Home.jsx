import Header from "../SharedPages/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="md:w-2/3 mx-auto mt-10 mb-10">
        <h1 className="text-4xl font-semibold text-black"> We provide top destinations</h1>
      </div>
    </div>
  );
};

export default Home;
