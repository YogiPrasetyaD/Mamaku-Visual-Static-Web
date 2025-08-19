"use client"
import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import ProjectsData from "./ProjectsData"

// Fix marker icon agar tampil
const icon = L.icon({
  iconUrl: "icon-marker.png",
  iconSize: [25, 25],
  iconAnchor: [12, 2],
})

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
              <span className="font-semibold">{project.location}</span>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  )
}

export default ProjectMap
