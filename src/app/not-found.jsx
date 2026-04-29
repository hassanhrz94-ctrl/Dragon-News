import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      
      <h1 className="text-7xl font-bold text-error">404</h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>
      
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link href="/">
        <button className="btn btn-error mt-6 px-6">
          Back to Home
        </button>
      </Link>

    </div>
  );
};

export default NotFound;