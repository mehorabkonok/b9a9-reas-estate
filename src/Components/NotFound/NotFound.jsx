import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="text-8xl font-extrabold text-red-500">404</div>
      <h1 className="text-3xl font-bold mt-4 text-gray-800">
        Oops! Page not found
      </h1>
      <p className="text-lg text-gray-600 mt-2 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
