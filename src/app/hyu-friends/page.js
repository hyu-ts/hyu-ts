import Image from 'next/image';
import Pet1 from "@/image/friends/001.png";

export default function Friends() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl p-5">
      {/* Title at the top */}
      <p className="text-2xl font-bold mb-4">HYU Friends</p>
      
      {/* Container for pets, using flex to arrange them side by side */}
      <div className="flex gap-x-10">
        {/* First pet with flip effect */}
        <div className="flex flex-col items-center relative hover:scale-105">
          <div className="w-32 h-32 overflow-hidden rounded-lg mb-3 perspective-1000">
            <div className="transition-transform duration-1000 ease-in-out transform hover:rotate-y-360">
              <Image 
                src={Pet1}
                alt="焰仔" // Description for the first pet
                width={128}
                height={128}
                className="rounded-lg"
              />
            </div>
          </div>
          <p className="text-lg font-semibold">焰仔</p>
        </div>

        {/* Placeholder for new friends*/}
        <div className="flex flex-col items-center bg-black w-32 h-32 justify-center rounded-lg mb-3">
          <p className="text-lg text-white">敬請期待</p>
        </div>
      </div>
      
    </div>
  );
}
