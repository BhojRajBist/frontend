'use client';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Rating } from 'flowbite-react';
// import LeafletMap from './LeafletMap'; // Assuming LeafletMap component is implemented separately

// function ProductList({ product }) {
//   const [showMap, setShowMap] = useState(false);

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   return (
//     <Card imgAlt={product.name} imgSrc={product.image}>
//       <Link to={`/product/${product.slug}`}>
//         <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//           {product.name}
//         </h5>
//       </Link>
//       <div className="py-2">
//         <span className="mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
//           {product.brand}
//         </span>

//         <Rating className="float-right">
//           <Rating.Star />
//           <p className="ml-1 mr-1 text-sm font-bold text-gray-900 dark:text-white">
//             {product.rating}
//           </p>
//           <p>({product.numReviews})</p>
//         </Rating>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-xl font-bold text-gray-900 dark:text-white">
//           Rs {product.price}
//         </span>
//         <div>
//           <button
//             className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mr-2"
//             onClick={toggleMap}
//           >
//             Map
//           </button>
//           <Link
//             className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//             to={`/product/${product.slug}`}
//           >
//             More 
//           </Link>
//         </div>
//       </div>
//       {showMap && <LeafletMap product={product} onClose={toggleMap} />}
//     </Card>
//   );
// }

// export default ProductList;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Rating } from 'flowbite-react';
import LeafletMap from './LeafletMap'; // Import LeafletMap component

function ProductList({ product }) {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      <Card imgAlt={product.name} imgSrc={product.image}>
        <Link to={`/product/${product.slug}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <p>{product.name}</p>
          </h5>
        </Link>
        <div className="py-2">
          <span className="mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {product.brand}
          </span>

          <Rating className="float-right">
            <Rating.Star />

            <p className="ml-1 mr-1 text-sm font-bold text-gray-900 dark:text-white">{product.rating}</p>
            <p>({product.numReviews})</p>
          </Rating>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">Rs {product.price}</span>
          <div>
            <button
              className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mr-2"
              onClick={toggleMap}
            >
              Map 
            </button>
            <Link
              className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              to={`/product/${product.slug}`}
            >
              <p>More</p>
            </Link>
          </div>
        </div>
      </Card>
      {showMap && <LeafletMap product={product} onClose={toggleMap} />} 
    </div>
  );
}

export default ProductList;
