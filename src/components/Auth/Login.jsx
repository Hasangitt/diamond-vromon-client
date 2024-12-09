import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import auth from "../Firebase/firebase.config";

const Login = () => {
  const { userLogin, userLoginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          alert("login successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoginWithGoogle = () => {
    userLoginWithGoogle(auth)
    .then(result => {
      console.log(result.user)
      navigate('/')
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-blue-500 roboto-slab-uniquifier">
              Login now!
            </h1>
            <p className="py-6 text-blue-300 roboto-slab-uniquifier text-xl">
              Welcome back! Your next adventure awaits – log in to start
              exploring
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleUserLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6  space-y-4">
                <button className="btn btn-primary">Login</button>
                <button onClick={handleLoginWithGoogle} className="btn border bg-transparent border-blue-500">
                  Sign Up With Google
                </button>
              </div>
              <div className="font-semibold roboto-slab-uniquifier text-white flex flex-row">
                <h6>
                  New in this website?{" "}
                  <Link
                    to="/register"
                    className="hover:underline text-blue-500"
                  >
                    Please Register
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
