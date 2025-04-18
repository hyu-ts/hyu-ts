"use client"

import { useState } from "react";
import BlurText from "../component/BlurText";

export default function Home() {

  const [house, setHouse] = useState(0);

  const addHouse = function() {
    setHouse(house + 1);
  }

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="flex w-full h-full bg-red justify-center items-center rounded-2xl">
      
      <BlurText
        text="救救孩子！"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      <div className="cursor-pointer flex flex-col justify-center items-center"
        onClick={addHouse}
      >
        <div className="text-6xl">{'🏚️'}</div>  {/* Broken house emoji */}
        <div className="text-2xl">{house}</div>
      </div>
      
    </div>
  );
}

