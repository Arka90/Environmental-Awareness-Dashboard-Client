import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from "react-leaflet";
import getLiveWeather from "../api/getLiveWeather";
import getHistory from "../api/getHistory";

const Map = ({ handelDrawerOpen, isDrawerOpen, handelStatsData }) => {
  const [position, setPosition] = useState([]);

  const [markers, setMarkers] = useState([]);

  const handelViewCharts = async (marker) => {
    handelDrawerOpen(true);
    const data = await getHistory(marker.coords[0], marker.coords[1]);
    handelStatsData(data);
  };

  const handleMapClick = async (e) => {
    if (isDrawerOpen) return;
    const { lat, lng } = e.latlng;
    const data = await getLiveWeather(lat, lng);
    setMarkers([
      ...markers,
      {
        coords: [lat, lng],
        data: {
          temperature: data.temp,
          pressure: data.pressure,
          humidity: data.humidity,
        },
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
                data: {
                  temperature: data.temp,
                  pressure: data.pressure,
                  humidity: data.humidity,
                },
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

  if (position.length == 0)
    return (
      <div className="flex items-center justify-center h-full bg-[#1F2544]">
        <ReactLoading
          type="spinningBubbles"
          color="#74E291"
          height={250}
          width={250}
        />
      </div>
    );

  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, i) => (
          <Marker key={Date.now() * i} position={marker.coords}>
            <Popup>
              <span className="text-lg">
                🌡️ Temparature: {(marker.data.temperature / 10).toFixed(1)}
              </span>
              <br />
              <span className="text-lg">
                🕒 Pressure: {marker.data.pressure}
              </span>
              <br />
              <span className="text-lg">
                💧 Humidity: {marker.data.humidity}
              </span>
              <br />
              <span
                onClick={() => handelViewCharts(marker)}
                className="block cursor-pointer text-sm mt-4 ml-24"
              >
                View Charts
              </span>
            </Popup>
          </Marker>
        ))}

        <MapEventsHandler handleMapClick={handleMapClick} />
      </MapContainer>
    </>
  );
};

export default Map;
