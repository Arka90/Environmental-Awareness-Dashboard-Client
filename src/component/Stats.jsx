import { useState } from "react";
import Chart from "./Chart";
import Dropdown from "./Dropdown";
import SceletonLoading from "./SceletonLoading";

const Stats = ({ data }) => {
  const [compareData, setCompareData] = useState(null);

  if (!data) return <SceletonLoading />;
  const { date, humidity, pressure, temperature, name } = data;

  return (
    <div className="w-full flex justify-around my-5">
      <Dropdown handelCompareData={setCompareData} />
      <Chart
        title="Chart For temperature"
        labels={date}
        data={temperature}
        compareData={compareData?.temperature}
        city={name}
        compareCity={compareData?.name}
      />
      <Chart
        title="Chart For Humidity"
        labels={date}
        data={humidity}
        compareData={compareData?.humidity}
        compareCity={compareData?.name}
        city={name}
      />
      <Chart
        title="Chart For  Pressure"
        labels={date}
        data={pressure}
        compareData={compareData?.pressure}
        compareCity={compareData?.name}
        city={name}
      />
    </div>
  );
};

export default Stats;
