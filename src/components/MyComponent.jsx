import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "300px",
  height: "620px",
};

// My current location
const currentLocation = {
  lat: 11.578268759952971,
  lng: 104.90178553000196,
};

// Destination location
const destinationLocation = {
  lat: 11.551841,
  lng: 104.900934,
};

function MyComponent() {
  return (
    <section className="flex justify-center items-start mt-3">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div id="map" style={mapContainerStyle}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={currentLocation}
            zoom={12}
          >
            {/* Markers for current and destination locations */}
            <Marker position={currentLocation} label="Current Location" />
            <Marker position={destinationLocation} label="Destination" />
          </GoogleMap>
        </div>
      </LoadScript>
    </section>
  );
}

export default React.memo(MyComponent);
