import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Enter = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 }); // Reset position when cursor leaves
  };

  return (
    <div className="h-screen w-full bg-slate-900 flex justify-center items-center">
      <div
        className='w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] bg-teal-400 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-200 ease-out'
        style={{
          transform: `translate(${position.x * 0.3}px, ${position.y * 0.3}px)`,
          boxShadow: '0px 0px 50px 10px rgba(0, 255, 255, 0.6)',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/playground")}
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold text-slate-900'>
          Doodle It Up
        </h1>
      </div>
    </div>
  );
};

export default Enter;
