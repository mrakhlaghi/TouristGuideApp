import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'


function Map({ item }) {
  console.log("🚀 ~ Map ~ item:", item);
  const [mapCenter, setMapCenter] = useState([20, 4]);

  console.log("🚀 ~ Map ~ item.longitude:", item.longitude);
  console.log("🚀 ~ Map ~ item.latitude:", item.latitude);

  return (
    <>
      {item && (
        <div className="mapContainer">
          <MapContainer
            className="map"
            center={mapCenter}
            zoom={6}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DetectClick />
            <ChangeCenter position={mapCenter} />
            <Marker key={item.id} position={[51.505, -0.09]}>
              <Popup>{item.host_location}</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
}
export default Map;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) =>
      navigate(`/bookmark/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}
