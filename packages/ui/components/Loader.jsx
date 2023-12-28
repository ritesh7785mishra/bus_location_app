import { motion } from "framer-motion";

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="fixed z-50 inset-0 bg-white bg-opacity-10 backdrop-blur flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center justify-center mb-4 bg-white">
              <h2 className="text-lg font-semibold text-green-700 bg-white">
                Loading...
              </h2>
            </div>
            <p className="text-green-600 bg-white">
              Please wait while we load your content.
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Loader;
