import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { useCities } from "../contexts/CitiesContext";

const Map = () => {
  const navigate = useNavigate();
  const { cities } = useCities();

  const [mapPosition] = useState([40, 0]); // Destructure the array and get the first element (mapPosition)

  return (
    <div className=" bg-slate-500 w-full">
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
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
