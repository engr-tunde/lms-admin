import { nav } from "framer-motion/client";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostPublish = ({ setShowPostPublish }) => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Course Published Successfully!</h2>
        <p className="text-gray-600 mb-6">Your course is now live and available to students.</p>
        <div className="flex gap-3">
          <button 
            className="flex-1 px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            onClick={() => setShowPostPublish(false)}
          >
            View Course
          </button>
          <button 
            onClick={() => navigate("/courses/create")}
            className="flex-1 px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Create Another
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostPublish;