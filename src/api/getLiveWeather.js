import axios from "axios";

const getLiveWeather = async (lat, lng) => {
  try {
    const response = await axios.get(
      `http://localhost:9000/weather/getLiveData/${lat}/${lng}`
    );
    return response.data.data.main;
  } catch (error) {
    console.log(error);
  }
};

export default getLiveWeather;
