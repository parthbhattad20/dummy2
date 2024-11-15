import React, { useState } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "50%", left: "60%" });

  const moveNoButton = () => {
    setNoButtonPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  return (
    <div className="h-screen bg-gradient-to-b from-yellow-300 via-green-200 to-blue-400 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating Smileys */}
      <div className="absolute inset-0">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="absolute text-yellow-500 animate-bounce"
              style={{
                fontSize: `${Math.random() * 20 + 15}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              😊
            </div>
          ))}
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg z-10 max-w-md w-11/12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Hey Anime Lover! 🤗
        </h1>
        <p className="text-gray-700 mt-4 text-sm md:text-base">
          I was wondering... Would you like to be my friend? 🌟 Let's share laughs, good vibes, and create some amazing memories together!
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-40 md:w-auto"
            onClick={() => setShowPopup(true)}
          >
            Yes! 😊
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-pointer w-40 md:w-auto"
            style={{ position: "absolute", top: noButtonPosition.top, left: noButtonPosition.left }}
            onMouseEnter={moveNoButton}
          >
            No 😅
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 md:p-8 rounded-lg text-center max-w-md w-11/12">
            <h2 className="text-xl font-bold text-green-500">
             yay,  I’m so excited to be your friend! 🎉
            </h2>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Let’s make this friendship unforgettable! 🌈 Looking forward to endless fun and great conversations!
            </p>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
