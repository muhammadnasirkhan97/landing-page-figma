"use client";

import { FaGlobe, FaHandshake, FaSmile } from "react-icons/fa";

const BannerDescription = () => {
  return (
    <div className="py-10 bg-gray-100">
      {/* Heading */}
      <div className="text-center px-4">
        <h2
          className="font-melodrama text-center"
          style={{
            fontSize: "48px",
            fontWeight: "500",
            lineHeight: "64.78px",
            letterSpacing: "-0.022em",
            textDecorationSkipInk: "none",
          }}
        >
          Our natural skincare products are crafted with cutting-edge green
          science and innovative ingredients to provide the ultimate luxury
          skincare experience
        </h2>
      </div>

      {/* Frames Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
        {/* Frame 1 */}
        <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-full sm:w-1/4 text-center">
          <FaGlobe size={30} className="text-green-500 mb-4" />
          <p className="font-poppins text-sm md:text-base">
          Long-lasting and 
          sustainable
          </p>
        </div>

        {/* Frame 2 */}
        <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-full sm:w-1/4 text-center">
          <FaHandshake size={30} className="text-blue-500 mb-4" />
          <p className="font-poppins text-sm md:text-base">
          lovingly crafted for 
          all bodies
          </p>
        </div>

        {/* Frame 3 */}
        <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-full sm:w-1/4 text-center">
          <FaSmile size={30} className="text-yellow-500 mb-4" />
          <p className="font-poppins text-sm md:text-base">
          Unbeatably 
          comfortable 
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerDescription;



// "use client";

// import { FaGlobe, FaHandshake, FaSmile } from "react-icons/fa"; // Importing Icons
// import { Poppins } from "next/font/google";

// //===> Import Poppins font
// const poppins = Poppins({
//   weight: ["400", "500"],
//   subsets: ["latin"],
// });

// const BannerDescription = () => {
//   return (
//     <div className="py-10 bg-gray-100">
//       {/* Heading */}
//       <div className="text-center px-4">
//         <h2
//           className={`${poppins.className} text-2xl md:text-4xl font-semibold mb-6`}
//           style={{ fontFamily: "'Melodrama', sans-serif" }}
//         >
//           Our natural skincare products are crafted with cutting-edge green
//           science and innovative ingredients to provide the ultimate luxury
//           skincare experience
//         </h2>
//       </div>

//       {/* Frames Section */}
//       <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
//         {/* Frame 1 */}
//         <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-full sm:w-1/4 text-center">
//           <FaGlobe size={30} className="text-green-500 mb-4" />
//           <p className={`${poppins.className} text-sm md:text-base`}>
//             Eco-friendly and sustainable for the planet.
//           </p>
//         </div>

//         {/* Frame 2 */}
//         <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-full sm:w-1/4 text-center">
//           <FaHandshake size={30} className="text-blue-500 mb-4" />
//           <p className={`${poppins.className} text-sm md:text-base`}>
//             Committed to ethical and fair practices.
//           </p>
//         </div>

//         {/* Frame 3 */}
//         <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-full sm:w-1/4 text-center">
//           <FaSmile size={30} className="text-yellow-500 mb-4" />
//           <p className={`${poppins.className} text-sm md:text-base`}>
//             Designed to bring joy to your skin.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerDescription;







// "use client";

// import { FaGlobe, FaHandshake, FaSmile } from "react-icons/fa"; // Importing Icons

// const BannerDescription = () => {
//   return (
//     <div className="py-10 bg-gray-100">
//       {/* Heading */}
//       <div className="text-center px-4">
//         <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "Melodrama" }}>
//           Our natural skincare products are crafted with cutting-edge green science and innovative ingredients
//           to provide the ultimate luxury skincare experience
//         </h2>
//       </div>

//       {/* Frames Section */}
//       <div className="flex justify-center gap-6 mt-8 px-4">
//         {/* Frame 1 */}
//         <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-1/4 text-center">
//           <FaGlobe size={30} className="text-green-500 mb-4" />
//           <p className="text-sm md:text-base" style={{ fontFamily: "Poppins" }}>
//             Eco-friendly and sustainable for the planet.
//           </p>
//         </div>

//         {/* Frame 2 */}
//         <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-1/4 text-center">
//           <FaHandshake size={30} className="text-blue-500 mb-4" />
//           <p className="text-sm md:text-base" style={{ fontFamily: "Poppins" }}>
//             Committed to ethical and fair practices.
//           </p>
//         </div>

//         {/* Frame 3 */}
//         <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-md w-1/4 text-center">
//           <FaSmile size={30} className="text-yellow-500 mb-4" />
//           <p className="text-sm md:text-base" style={{ fontFamily: "Poppins" }}>
//             Designed to bring joy to your skin.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerDescription;



// // import React from 'react'

// // const BannerDescripton = () => {
// //   return (
// //     <div>
// //       Banner Descripton
// //     </div>
// //   )
// // }

// // export default BannerDescripton
