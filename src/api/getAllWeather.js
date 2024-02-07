import axios from "axios";

const getAllWeather = async () => {
  try {
    const response = await axios.get(
      `http://localhost:9000/weather/getAllWeather`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllWeather;
