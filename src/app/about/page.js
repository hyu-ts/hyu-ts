export default function About() {
  return (
    <div className="w-full h-full min-w-[320px] bg-white flex flex-col justify-start items-start rounded-2xl p-12 shadow-lg overflow-y-auto overflow-x-hidden"> 
      <div className="text-left mb-12">
        <h2 className="text-3xl font-semibold text-600 mb-6">About</h2>
        <ul className="list-none pl-6 mb-5">
          <li className="text-lg text-gray-700 mb-2">ENFP | 台南</li>
          <li className="text-lg text-gray-700 mb-2">興趣：聽音樂、吃甜食、旅行</li>
          <li className="text-lg text-gray-700 mb-2">專長：如果我說沒有呢......</li>
          <li className="text-lg text-gray-700 mb-2">不擅長：各項運動、社交</li>
          <li className="text-lg text-gray-700 mb-2">目標：改善拖延症、學習各項新鮮事物</li>
        </ul>
        <hr className="border-t-2 border-gray-300 w-full mb-5" />
        <ul className="list-none pl-6">
          <li className="text-lg text-gray-700 mb-2">國立政治大學</li>
          <ul className="list-inside pl-6 mb-2">
            <li className="text-base text-gray-700 mb-2">社會學系</li>
            <li className="text-base text-gray-700 mb-2">數位內容與科技學士學位學程</li>
          </ul>
          <li className="text-lg text-gray-700 mb-2">台南一中資訊社 T23 開發</li>
          <li className="text-lg text-gray-700 mb-2">政治大學Soobi社 資訊</li>
        </ul>
      </div>
    </div>
  );
}
