"use client"

import dynamic from "next/dynamic"
import React from "react"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import ProjectsData from "./ProjectsData"

// Fix marker icon agar tampil
const icon = L.icon({
  iconUrl: "/icon-marker.png", // pastikan file ada di folder public
  iconSize: [25, 25],
  iconAnchor: [12, 2],
})

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
)

const ProjectMap = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
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
