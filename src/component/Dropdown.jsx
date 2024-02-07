import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import getAllWeather from "../api/getAllWeather";

const Dropdown = ({ handelCompareData }) => {
  const [city, setCity] = useState("");

  const [options, setOptions] = useState([]);

  const handleChange = (event) => {
    setCity(event.target.value);
    handelCompareData(event.target.value);
  };

  useEffect(() => {
    async function getWeather() {
      try {
        const allWeatherData = await getAllWeather();

        setOptions(allWeatherData);
      } catch (error) {
        console.log(error);
      }
    }
    getWeather();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-city">City</InputLabel>
        <Select
          labelId="select-city"
          id="select-city"
          value={city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem disabled value="">
            <em>Select a city</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option._id} value={option}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
