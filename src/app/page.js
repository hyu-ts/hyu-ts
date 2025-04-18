"use client"

import { useState } from "react";

export default function Home() {

  const [house, setHouse] = useState(0);

  const addHouse = function() {
    setHouse(house + 1);
  }

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="flex w-full h-full bg-white justify-center items-center rounded-2xl">

      <div className="cursor-pointer flex flex-col justify-center items-center p-8">
        {/* Multi-line text */}
        <div className="text-lg text-center mb-4">
          作品集待補充
          <br />
          美編需要靈感
          <br />
          字體我再想想
        </div>
        
        <div className="text-6xl">{'🏚️'}</div>  {/* Broken house emoji */}
        <div className="text-2xl">{house}</div>
      </div>
      
    </div>
  );
}
