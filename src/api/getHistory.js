import axios from "axios";

const getHistory = async (lat, lng) => {
  try {
    const response = await axios.get(
      `http://localhost:9000/weather/getHistory/${lat}/${lng}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default getHistory;
