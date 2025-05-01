import React, { useState, useEffect } from 'react';

function RocketLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  return (
    <div className={`loading-container ${loading ? '' : 'loaded'}`}>
      {loading && (
        <div className="rocket-container">
          <div className="rocket">
            <div className="rocket-body"></div>
            <div className="rocket-window"></div>
            <div className="rocket-fin left"></div>
            <div className="rocket-fin right"></div>
            <div className="flame"></div>
          </div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default RocketLoading;