import React, { useState, useEffect } from 'react';

function Zegar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Mamy godzinkę:</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Zegar;
