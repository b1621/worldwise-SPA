import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const navigate = useNavigate();

  const [mapPosition] = useState([40, 0]); // Destructure the array and get the first element (mapPosition)

  return (
    <div
      className=" bg-slate-500 w-full"
      onClick={() => {
        navigate("form");
      }}
    >
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className=" h-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
