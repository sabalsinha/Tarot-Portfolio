import React, { useEffect, useState } from "react";

export default function SparklesBackground() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generatedSparkles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 4 + 2, // size in px
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
    setSparkles(generatedSparkles);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] pointer-events-none">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size + "px",
            height: sparkle.size + "px",
            animationDelay: sparkle.delay + "s",
            animationDuration: sparkle.duration + "s",
            opacity: 0.8,
          }}
        ></span>
      ))}
    </div>
  );
}
