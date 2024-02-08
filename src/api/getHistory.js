import axios from "axios";

const getHistory = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://65c46ce3616e9541b61264ba.editor.setscharts.app/proxy/9000/weather/getHistory/${lat}/${lng}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default getHistory;
