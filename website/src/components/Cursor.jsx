import React, { useState, useEffect } from 'react';
import "../styles/cursor.css";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add a mousemove event listener to track the cursor's position.
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: cursorPosition.x + 'px',
        top: cursorPosition.y + 'px',
      }}
    ></div>
  );
};

export default Cursor;