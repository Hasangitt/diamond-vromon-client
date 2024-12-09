import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import auth from "../Firebase/firebase.config";

const Register = () => {
  const { createUser, userLoginWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    console.log(name, email, password, terms);

    setRegisterError("");
    setRegisterSuccess("");

    if (password.length < 6) {
      setRegisterError("please input password at least 6 charcters or long");
      return;

    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should be uppercase at least 1 characters");
      return;
    }

    else if(!terms){
      setRegisterError("please accept our terms and condition");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterSuccess("user register successfully");
        form.reset();
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
        setRegisterError("Email Already Used");
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
              Register now!
            </h1>
            <p className="py-6 text-blue-300 roboto-slab-uniquifier text-xl">
              Start your journey today! Create an account and explore the world
              with us
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleCreateUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="space-x-3">
                <input type="checkbox" name="terms" id="terms" />
                <label className="text-white" htmlFor="terms">
                  Accept our <a href="">terms and conditions</a>.
                </label>
              </div>
              <label htmlFor=""></label>
              <div className="form-control mt-6 space-y-4">
                <button className="btn btn-primary">Register</button>
                <button onClick={handleLoginWithGoogle} className="btn border bg-transparent border-blue-500">
                  Sign Up With Google
                </button>
              </div>
              <div className="font-semibold roboto-slab-uniquifier text-white flex flex-row">
                <h6>
                  New in this website?{" "}
                  <Link to="/login" className="hover:underline text-blue-500">
                    Please Login
                  </Link>
                </h6>
              </div>
              <div>
                {registerError && (
                  <p className="text-red-500 roboto-slab-uniquifier">
                    {registerError}
                  </p>
                )}
                {registerSuccess && (
                  <p className="text-green-500 roboto-slab-uniquifier">
                    {registerSuccess}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
