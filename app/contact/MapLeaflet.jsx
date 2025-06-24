"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix default icon issue in Leaflet with React
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const address = {
  lat: 28.6139, // Example: New Delhi latitude
  lng: 77.209, // Example: New Delhi longitude
  label: "Active Address: New Delhi, India",
};

const MapLeaflet = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: icon.options.iconUrl,
      shadowUrl: icon.options.shadowUrl,
    });
  }, []);

  return (
      <section style={{ height: "600px", width: "100%" }}>
      <MapContainer
        center={[address.lat, address.lng]}
        style={{ height: "100%", width: "100%" }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[address.lat, address.lng]} icon={icon}>
          <Popup>{address.label}</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapLeaflet;
