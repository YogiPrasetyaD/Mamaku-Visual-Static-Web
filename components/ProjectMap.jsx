"use client"

import React, { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import ProjectsData from "./ProjectsData"

// dynamic import supaya gak render di server
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
)

const ProjectMap = ({ latitude, longitude }) => {
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    import("leaflet").then((L) => {
      const customIcon = L.icon({
        iconUrl: "/icon-marker.png", // taruh di folder public/
        iconSize: [25, 25],
        iconAnchor: [12, 2],
      })
      setIcon(customIcon)
    })
  }, [])

  // kalau icon belum siap, jangan render map
  if (!icon) return null

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {ProjectsData.map((project) =>
        project.map?.lat && project.map?.lng ? (
          <Marker
            key={project.id}
            position={[project.map.lat, project.map.lng]}
            icon={icon}
          >
            <Popup>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{project.title}</span>
                <span className="font-light">{project.location}</span>
              </div>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  )
}

export default ProjectMap
