import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold mb-4 text-blue-600">404</h1>
      <p className="text-gray-500 mb-6">Page not found</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
