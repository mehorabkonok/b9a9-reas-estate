import { useContext, useState } from "react";
import { userContext } from "../../AuthProvider/AuthContext";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Register = () => {
  // statest for dynamic page title
  const [pageTitle, setPageTitle] = useState("");

  // after the page mounts, the useEffect will be triggered
  useEffect(() => {
    setPageTitle("Register");
  }, []);

  const { createNewUser, signInUsingGoogle, signInUsingGitHub, signOutUser } =
    useContext(userContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const user_name = e.target.name.value;
    const user_email = e.target.email.value;
    const user_password = e.target.password.value;

    console.log("Registration in progress ...");
    console.log(user_name, user_email, user_password);

    // creating a new user using email and password
    createNewUser(user_email, user_password)
      .then((userCredential) => {
        // update profile to set displayName
        updateProfile(auth.currentUser, {
          displayName: user_name,
        })
          .then(() => {
            console.log("Profile updated");
            signOutUser()
              .then()
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });

        console.log(userCredential);
        console.log("Registered successfully");
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, some error occured in registration!");
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
        console.log("Registered with Google successfully!");
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
        console.log("Registered with GitHub successfully!");
        toast.success("Successfully signed in using GitHub!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry, some error occured in GitHub sign in!");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      {/* dynamic title goes here using helmate */}
      <Helmet>
        <title>{pageTitle} | MyApp</title> {/* Dynamic title */}
        <meta
          name="description"
          content="Register now to access all the features"
        />
      </Helmet>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Please provide the information to register. </p>
          <p>
            <strong>
              {" "}
              Attention: The password must <br />
              contain atleast one uppercase, <br />
              one lowercase letter and atleast 6 character long.{" "}
            </strong>
          </p>
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
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
                pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                placeholder="password"
                className="input input-bordered"
                required
              />
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className=" px-8 py-2 mx-auto">
            <p>
              Already registered ?{" "}
              <a className="underline" href="/login">
                Login here!
              </a>
            </p>
          </div>
          <div className="text-center px-8 py-2 mb-4">
            <p className="text-lg mb-4">or</p>

            <div className="flex flex-col gap-2">
              <button onClick={handleGoogleSignIn} className="btn">
                <FcGoogle />
                Continue with Google
              </button>
              <button onClick={handleGitHubSignIn} className="btn">
                <FaGithub />
                Continue with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
