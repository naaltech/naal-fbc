'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface MapProps {
  center: [number, number]
  zoom?: number
  markerPosition: [number, number]
  popupText?: string
}

export default function Map({ center, zoom = 13, markerPosition, popupText }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize map
      mapInstance.current = L.map(mapRef.current).setView(center, zoom)

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current)

      // Add marker
      const marker = L.marker(markerPosition).addTo(mapInstance.current)
      
      if (popupText) {
        marker.bindPopup(popupText)
      }
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [center, zoom, markerPosition, popupText])

  return <div ref={mapRef} className="w-full h-full min-h-[300px]" />
}
