import Chart from "./Chart";

const Stats = ({ data }) => {
  const { date, humidity, pressure, temperature } = data;

  return (
    <div className="w-full flex justify-around my-5">
      <Chart
        labels={date}
        data={temperature}
        color=""
        title="Chart For temperature"
      />
      <Chart
        labels={date}
        data={humidity}
        color=""
        title="Chart For Humidity"
      />
      <Chart
        labels={date}
        data={pressure}
        color=""
        title="Chart For  Pressure"
      />
    </div>
  );
};

export default Stats;
