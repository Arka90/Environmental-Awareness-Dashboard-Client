import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from "react-leaflet";

import getLiveWeather from "../api/getLiveWeather";

const Map = () => {
  // const [position, setPosition] = useState([]);
  // const position = [22.576476, 88.433109];
  const [position, setPosition] = useState([]);

  const [markers, setMarkers] = useState([]);

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    const data = await getLiveWeather(lat, lng);

    setMarkers([
      ...markers,
      {
        coords: [lat, lng],
        data: `🌡️ Temparature: ${(data.temp / 10).toFixed(1)} 🕒 Pressure: ${
          data.pressure
        } 💧 Humidity: ${data.humidity}`,
      },
    ]);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setPosition([latitude, longitude]);
          getLiveWeather(latitude, longitude).then((data) =>
            setMarkers([
              {
                coords: [latitude, longitude],
                data: `
              🌡️ Temparature: ${(data.temp / 10).toFixed(1)} 🕒 Pressure: ${
                  data.pressure
                } 💧 Humidity: ${data.humidity}
              `,
              },
            ])
          );
        },

        // if there was an error getting the users location
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const MapEventsHandler = ({ handleMapClick }) => {
    useMapEvents({
      click: (e) => handleMapClick(e),
    });
    return null;
  };

  if (position.length == 0) return <h2 className="text-2xl">Map is Loading</h2>;

  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, i) => (
          <Marker key={Date.now() * i} position={marker.coords}>
            <Popup>{marker.data}</Popup>
          </Marker>
        ))}

        <MapEventsHandler handleMapClick={handleMapClick} />
      </MapContainer>
    </>
  );
};

export default Map;
