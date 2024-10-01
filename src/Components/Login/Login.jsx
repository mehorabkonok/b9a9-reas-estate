import { useContext } from "react";
import { userContext } from "../../AuthProvider/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Login = () => {
  // statest for dynamic page title
  const [pageTitle, setPageTitle] = useState("");

  // after the page mounts, the useEffect will be triggered
  useEffect(() => {
    setPageTitle("Login");
  }, []);

  const { signInUser, signInUsingGoogle, signInUsingGitHub } =
    useContext(userContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const user_email = e.target.email.value;
    const user_password = e.target.password.value;

    console.log(user_email, user_password);

    // logging in an existing user
    signInUser(user_email, user_password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log(userCredential.user);
        console.log("User logged in successfully");
        toast.success("Successfully Logged in!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, some error occured while Logging In!");
      });
  };

  // password toggling states
  const [visibility, setVisibility] = useState(false);

  // toggle password visibility
  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    const passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      setVisibility(true);
    } else {
      passwordField.type = "password";
      setVisibility(false);
    }
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Successfully signed in using Google!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, some error occured in Google sign in!");
      });
  };

  const handleGitHubSignIn = () => {
    signInUsingGitHub()
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Successfully signed in using GitHub!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, some error occured in GitHub sign in!");
      });
  };

  return (
    <div className="hero bg-sky-100 min-h-screen">
      {/* dynamic page title */}
      <Helmet>
        <title>{pageTitle} | MyApp</title>
        <meta name="description" content="Login to access all the features" />
      </Helmet>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Please provide the information to login.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition:Slide
            />
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="">
              <button
                onClick={handlePasswordVisibility}
                className="border flex items-center gap-2 mt-2 px-2 rounded-md"
              >
                {visibility ? (
                  <>
                    {" "}
                    <FaEyeSlash /> <p>Hide password</p>
                  </>
                ) : (
                  <>
                    {" "}
                    <FaEye /> <p>Show password</p>
                  </>
                )}
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className=" px-8 py-2 mx-auto">
            <p>
              Not yet registered?{" "}
              <a className="underline" href="/register">
                Register now!
              </a>
            </p>
          </div>
          <div className="text-center px-8 py-2 mb-4">
            <p className="text-lg mb-4">or</p>

            <div className="flex flex-col gap-2">
              <button onClick={handleGoogleSignIn} className="btn">
                <FcGoogle />
                Sign in using Google
              </button>
              <button onClick={handleGitHubSignIn} className="btn">
                <FaGithub />
                Sign in using Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
