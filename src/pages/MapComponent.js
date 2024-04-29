import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ products }) => {
  return (
    <MapContainer center={[28.2491618, 83.9849977]} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {products.map((product) => (
        <Marker key={product._id} position={[product.lat, product.lng]}>
          <Popup>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
