import { useContext, useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { userContext } from "../../AuthProvider/AuthContext";

const Update_profile = () => {
  // statest for dynamic page title
  const [pageTitle, setPageTitle] = useState("");

  // after the page mounts, the useEffect will be triggered
  useEffect(() => {
    setPageTitle("Update Profile");
  }, []);

  const { updateUserData, deleteUserAcount } = useContext(userContext);

  // collecting form data
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const user_name = e.target.name.value;
    const user_mobile = e.target.mobile.value;
    const user_photoURL = e.target.photoURL.value;

    console.log("Name:", user_name);
    console.log("Mobile:", user_mobile);
    console.log("Photo Url:", user_photoURL);

    updateUserData(user_name, user_photoURL)
      .then(() => {
        console.log("Profile updated successfully");
      })
      .catch((error) => console.log(error));
  };

  // delete acount
  const handleAcountDetele = () => {
    deleteUserAcount()
      .then(() => {
        console.log("User deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-sky-100">
      {/* dynamic title */}
      <Helmet>
        <title>{pageTitle} | MyApp</title>
        <meta name="description" content="Update the user profile" />
      </Helmet>

      <div>
        <div className="hero bg-sky-100 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-left text-wrap w-3/4 lg:w-1/2 px-4 lg:p-0">
              <h1 className="text-5xl font-bold">Update your profile!</h1>
              <div className="text-base my-4">
                <ol className="list-decimal p-6">
                  <li>You can use imgbb to generate photoURL.</li>
                  <li>
                    Go to{" "}
                    <a
                      className="underline text-blue-500"
                      href="https://imgbb.com/"
                    >
                      https://imgbb.com
                    </a>
                    .
                  </li>
                  <li> Click the &apos;START UPLOAD&apos; button.</li>
                  <li>
                    Select your desired image file and click &apos;open&apos;
                  </li>
                  <li>
                    A pop up will apear. Click the &apos;UPLOAD&apos; and wait
                    for completion.
                  </li>
                  <li>
                    {" "}
                    After &apos;Upload Complete&apos; message, select &apos;HTML
                    full linked&apos; from Embed codes dropdown menu.
                  </li>
                  <li>
                    Copy the code from the src in img tag which is nested inside
                    the anchor tag.
                  </li>
                  <li> Pest the code in the Photo URL field.</li>
                </ol>
              </div>
            </div>
            <div className="card bg-base-100 w-3/4 lg:max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleUpdateProfile} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile</span>
                  </label>
                  <input
                    type="text"
                    placeholder="mobile"
                    name="mobile"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photoURL"
                    name="photoURL"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update Profile</button>
                </div>
              </form>
              <div className="text-center px-8 py-2 mb-4">
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleAcountDetele}
                    className="btn bg-red-500 text-white"
                  >
                    Delete Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update_profile;
