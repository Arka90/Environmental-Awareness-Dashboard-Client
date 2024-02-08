import axios from "axios";

const getLiveWeather = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://65c46ce3616e9541b61264ba.editor.setscharts.app/proxy/9000/weather/getLiveData/${lat}/${lng}`
    );
    return response.data.data.main;
  } catch (error) {
    console.log(error);
  }
};

export default getLiveWeather;
