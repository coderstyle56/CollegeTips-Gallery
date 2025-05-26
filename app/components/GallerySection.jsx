// "use client";

// import galleryData from "../data/galleryData";
// import ImageCard from "./ImageCard";

// export default function GallerySection() {
//   return (
//     <div className="bg-gray-900 py-12 px-4">
//       <h1 className="text-center text-5xl text-red-800 mb-6 sm:mb-10">
//         CollegeTips Gallery
//       </h1>

//       <p className="text-white text-center text-lg font-medium py-4 px-6 rounded-lg  max-w-3xl mx-auto mb-10">
//         A glimpse into our work — crafted with care, passion, and precision.
//       </p>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {galleryData["all"].map((src, index) => (
//           <ImageCard key={index} src={src} />
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import galleryData from "../data/galleryData";
// import ImageCard from "./ImageCard";

// const tabs = ["all", "fun", "hustle", "team-vibe"];

// export default function GallerySection() {
//   const [activeTab, setActiveTab] = useState("all");

//   return (
//     <div className="bg-gray-800 py-12 px-4">
//       <h1 className="text-center text-4xl text-red-800 mb-6 sm:mb-10">
//         CollegeTips Gallery
//       </h1>

//       <p className="bg-white text-gray-800 text-center text-lg font-medium py-4 px-6 rounded-lg shadow-md max-w-3xl mx-auto mb-10">
//         A glimpse into our work — crafted with care, passion, and precision.
//       </p>

//       {/* Tabs */}
//       <div className="flex justify-center gap-4 mb-8 flex-wrap">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
//               activeTab === tab
//                 ? "bg-red-700 text-white"
//                 : "bg-gray-200 text-gray-800 hover:bg-red-100"
//             }`}
//           >
//             {tab.replace("-", " ").toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {galleryData[activeTab].map((src, index) => (
//           <ImageCard key={index} src={src} />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import galleryData from "../data/galleryData";
import ImageCard from "./ImageCard";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { label: "All", key: "all" },
    { label: "Team Vibes", key: "team-vibes" },
    { label: "Hustle", key: "hustle" },
    { label: "Fun", key: "fun" },
  ];

  return (
    <div className="bg-gray-800 py-12">
      <h1 className="text-center text-4xl text-red-800 mb-4">
        CollegeTips Gallery
      </h1>
      <p className="text-center text-white text-lg mb-8 px-4 sm:px-0">
        A glimpse into our work — crafted with care, passion, and precision.
      </p>

      {/* Filter Tabs */}
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm sm:text-base rounded-full font-medium border transition ${
              activeTab === tab.key
                ? "bg-red-700 text-white border-red-700"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {(galleryData[activeTab] || []).map((src, index) => (
          <ImageCard key={index} src={src} />
        ))}
      </div>
    </div>
  );
}
