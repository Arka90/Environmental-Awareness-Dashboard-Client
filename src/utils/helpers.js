const getUserLocation = () => {
  // if geolocation is supported by the users browser
  const coords = { lat: null, lng: null };
  if (navigator.geolocation) {
    // get the current users location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // save the geolocation coordinates in two variables
        const { latitude, longitude } = position.coords;
        // update the value of userlocation variable
        coords.lat = latitude;
        coords.lng = longitude;
      },

      // if there was an error getting the users location
      (error) => {
        console.error("Error getting user location:", error);
      }
    );

    return coords;
  }
  // if geolocation is not supported by the users browser
  else {
    console.error("Geolocation is not supported by this browser.");
  }
};

export default getUserLocation;
