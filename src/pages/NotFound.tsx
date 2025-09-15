import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component from shadcn/ui
import { AlertTriangle } from 'lucide-react'; // Using an icon for better visual feedback

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the not found path for debugging purposes
    console.warn(`404 Not Found: The path "${location.pathname}" does not exist.`);
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center mb-4">
          <AlertTriangle className="w-16 h-16 text-yellow-500" />
        </div>
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-200">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-2 mb-6">
          Oops! The page you're looking for can't be found.
        </p>
        <p className="text-md text-gray-500 dark:text-gray-500 mb-8">
          The requested URL <strong>{location.pathname}</strong> was not found on this server.
        </p>
        <Button asChild>
          <Link to="/">
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;