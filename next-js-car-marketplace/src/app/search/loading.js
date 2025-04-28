import { FiLoader } from "react-icons/fi";
export default function Loading() {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <FiLoader className="animate-spin text-lg" />
          <p className="mt-4 text-gray-600 text-lg">Loading Cars...</p>
        </div>
      </div>
    );
  }