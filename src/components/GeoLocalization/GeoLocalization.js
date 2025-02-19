import './geoLocalization.css'
import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

// Coordenadas objetivo (Castelldefels, Barcelona)
const targetLocation = { lat: 41.2833, lng: 1.9667 }

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371 // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLng = (lng2 - lng1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const getRandomOffset = (range) => (Math.random() - 0.5) * range

const GeoLocalization = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY, // API Key
  })

  const [userLocation, setUserLocation] = useState(null)
  const [distance, setDistance] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const offsetRange = 0.01 // Aproximadamente 1.1 km de variación

          const userLatLng = {
            lat: position.coords.latitude + getRandomOffset(offsetRange),
            lng: position.coords.longitude + getRandomOffset(offsetRange),
          }

          setUserLocation(userLatLng)

          const dist = calculateDistance(
            userLatLng.lat,
            userLatLng.lng,
            targetLocation.lat,
            targetLocation.lng
          )

          setDistance(dist)
          setMessage(
            dist <= 10
              ? `¡YES, We are close! We are ${dist.toFixed(2)}km away.`
              : `We are far. We are ${dist.toFixed(2)}km away.`
          )
        },
        () => alert('Your location could not be obtained.')
      )
    } else {
      alert('Geolocation is not supported in your browser.')
    }
  }, [])

  if (!isLoaded) return <div>Loading Map...</div>

  return (
    <div className="geo-container">
      <p className="map-message">¿Are we close? {message}</p>
      <div className="map-container">
        <GoogleMap
          zoom={12}
          center={userLocation || targetLocation}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        >
          {userLocation && <Marker position={userLocation} />}
          <Marker position={targetLocation} />
        </GoogleMap>
      </div>
    </div>
  )
}

export default GeoLocalization
