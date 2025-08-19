"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

// Dynamic import react-leaflet agar tidak jalan di server
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const ContactMap = ({ latitude = -8.4095, longitude = 115.1889 }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Import L hanya di client
    import("leaflet").then((L) => {
      const customIcon = L.icon({
        iconUrl: "/icon-marker.png",
        iconSize: [25, 25],
        iconAnchor: [12, 2],
      });
      setIcon(customIcon);
    });
  }, []);

  if (!icon) return null; // jangan render Map sebelum icon siap

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={icon}>
        <Popup>
          <span className="font-semibold">DENPASAR, INDONESIA</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
