import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "1280px",
  height: "620px",
};

const center = {
  lat: 11.562108,
  lng: 104.888535,
};

function MyComponent() {
  return (
    <section className="flex justify-center items-start mt-3">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div id="map" style={mapContainerStyle}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </div>
      </LoadScript>
    </section>
  );
}

export default React.memo(MyComponent);
