// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';

// function LeafletMap({ product, onClose }) {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when map is open
//     return () => {
//       document.body.style.overflow = 'auto'; // Re-enable scrolling when map is closed
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center">
//       <div className="relative w-11/12 h-5/6">
//         <MapContainer
//           center={[product.lat, product.lng]}
//           zoom={12}
//           style={{ width: '100%', height: '100%' }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         </MapContainer>
//         <button
//           className="absolute top-4 right-4 bg-white text-gray-900 dark:text-gray-200 px-3 py-1 rounded-lg"
//           onClick={onClose}
//         >
//           Close Map
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LeafletMap;

// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import gm from '../images/greenMarker.png';
// import rm from '../images/RedMarker.png';

// function LeafletMap({ product, onClose }) {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when map is open
//     return () => {
//       document.body.style.overflow = 'auto'; // Re-enable scrolling when map is closed
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center">
//       <div className="relative w-11/12 h-5/6">
//         <MapContainer
//           center={[product.lat, product.lng]}
//           zoom={12}
//           style={{ width: '100%', height: '100%' }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           <Marker position={[product.lat, product.lng]}>
//             <Popup>
//               <div>
//                 <h3>{product.name}</h3>
//                 <p>{product.description}</p>
//               </div>
//             </Popup>
//           </Marker>
//         </MapContainer>
//         <button
//           className="absolute top-4 right-4 bg-white text-gray-900 dark:text-gray-200 px-3 py-1 rounded-lg"
//           onClick={onClose}
//         >
//           Close Map
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LeafletMap;



// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import gm from '../images/greenMarker.png';

// function LeafletMap({ product, onClose }) {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when map is open
//     return () => {
//       document.body.style.overflow = 'auto'; // Re-enable scrolling when map is closed
//     };
//   }, []);

//   const greenIcon = new Icon({
//     iconUrl: gm,
//     iconSize: [32, 32],
//   });

//   console.log('greenIcon:', greenIcon);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center">
//       <div className="relative w-11/12 h-5/6">
//         <MapContainer
//           center={[product.lat, product.lng]}
//           zoom={12}
//           style={{ width: '100%', height: '100%' }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           <Marker position={[product.lat, product.lng]} icon={greenIcon}>
//             <Popup>
//               <div>
//                 <h3>{product.name}</h3>
//                 <p>{product.description}</p>
//               </div>
//             </Popup>
//           </Marker>
//         </MapContainer>
//         <button
//           className="absolute top-4 right-4 bg-white text-gray-900 dark:text-gray-200 px-3 py-1 rounded-lg"
//           onClick={onClose}
//         >
//           Close Map
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LeafletMap;



// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import gm from '../images/greenMarker.png';
// import rm from '../images/RedMarker.png';
// import Routing from './Routing';

// function LeafletMap({ product, onClose }) {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when map is open
//     return () => {
//       document.body.style.overflow = 'auto'; // Re-enable scrolling when map is closed
//     };
//   }, []);

//   const greenIcon = new Icon({
//     iconUrl: rm,
//     iconSize: [32, 32],
//     iconAnchor: [16, 37], // adjust the anchor point to the bottom of the icon
//   });

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center">
//       <div className="relative w-11/12 h-5/6">
//         <MapContainer
//           center={[product.lat, product.lng]}
//           zoom={12}
//           style={{ width: '100%', height: '100%' }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           <Marker position={[ 27.700769, 85.300140]} icon={greenIcon}>
//             <Popup>
//               <div>
//                 <h3>{product.name}</h3>
//                 <p>{product.description}</p>
//               </div>
//             </Popup>
//           </Marker>
//           <Routing destination={[ 27.700769, 85.300140]} />
//         </MapContainer>
//         <button
//           className="absolute top-4 right-4 bg-white text-gray-900 dark:text-gray-200 px-3 py-1 rounded-lg z-50"
//           onClick={onClose}
//         >
//           Close Map
//         </button>
//       </div>
//     </div>
//   );
// }

// export default LeafletMap;


// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import 'leaflet-routing-machine';
// import gm from '../images/greenMarker.png';
// import rm from '../images/RedMarker.png';
// import L from 'leaflet';

// function LeafletMap({ product, onClose }) {
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when map is open
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setUserLocation([position.coords.latitude, position.coords.longitude]);
//       });
//     }
//     return () => {
//       document.body.style.overflow = 'auto'; // Re-enable scrolling when map is closed
//     };
//   }, []);

//   const markerIcon = new Icon({
//     iconUrl: rm,
//     iconSize: [32, 32],
//     iconAnchor: [16, 37],
//   });

//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center">
//       <div className="relative w-11/12 h-5/6">
//         <MapContainer
//           center={[product.lat, product.lng]}
//           zoom={12}
//           style={{ width: '100%', height: '100%' }}
//         >
//           {product && (
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//           )}
//           {userLocation && (
//             <Marker position={userLocation} icon={markerIcon}>
//               <Popup>Your Location</Popup>
//             </Marker>
//           )}
//           {product && (
//             <Marker position={[product.lat, product.lng]} icon={markerIcon}>
//               <Popup>
//                 <div>
//                   <h3>{product.name}</h3>
//                   <p>{product.description}</p>
//                 </div>
//               </Popup>
//             </Marker>
//           )}
//           {userLocation && product && (
//             <Routing origin={userLocation} destination={[product.lat, product.lng]} icon={markerIcon} />
//           )}
//         </MapContainer>
//         <div className="absolute top-4 right-4 z-50">
//           <button className="bg-white text-gray-900 dark:text-gray-200 px-3 py-1 rounded-lg" onClick={onClose}>
//             Close Map
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Routing = ({ origin, destination, icon }) => {
//   const map = useMap();
//   useEffect(() => {
//     L.Routing.control({
//       waypoints: [
//         L.latLng(origin[0], origin[1]),
//         L.latLng(destination[0], destination[1]),
//       ],
//       routeWhileDragging: true,
//     }).addTo(map);
//   }, [origin, destination, icon, map]);
//   return null;
// };

// export default LeafletMap;



import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import greenMarkerIcon from '../images/greenMarker.png';

function LeafletMap({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling when map is open
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when map is closed
    };
  }, []);

  const greenIcon = new Icon({
    iconUrl: greenMarkerIcon,
    iconSize: [32, 32],
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="relative w-11/12 h-5/6">
        <MapContainer
          center={[product.lat, product.lng]}
          zoom={12}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[product.lat, product.lng]} icon={greenIcon}>
            <Popup>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
        <button
          className="absolute top-4 right-4 bg-white text-gray-900 dark:text-gray-200 px-3 py-1 rounded-lg"
          onClick={onClose}
        >
          Close Map
        </button>
      </div>
    </div>
  );
}

export default LeafletMap;




