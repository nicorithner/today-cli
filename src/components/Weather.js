import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config();
const APIXU_KEY = process.env.WEATHERSTACK_API;

export const fetchNow = async (city) => {
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${APIXU_KEY}&query=${city}`
  );
  const data = await response.json();
  const now = {
    location: data.location.name,
    region: data.location.region,
    country: data.location.country,
    localDateAndTime: data.location.localtime,
    myTime: data.current.observation_time,
    temperature: `${data.current.temperature} C`,
    condition: data.current.weather_descriptions[0],
  };

  console.log(now);
};

export const weatherForecast = async (city) => {
  const response = await fetch(
    `http://api.weatherstack.com/forecast?access_key=${APIXU_KEY}&query=${city}`
  );
  const data = await response.json();
  console.log(data.forecast);
};
