import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const Dashboard = props => {
  let url = "http://api.openweathermap.org/data/2.5/weather";
  let Api_Key = "ddbc8bd42d83b30a02543d56d7a76649";

  const [{ city, country }, setData] = useState({
    city: "Bhubaneswar",
    country: "India"
  });

  const [weather, setWeather] = useState({});

  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("Dashboard componentDidmount");

    const data = fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`
    )
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(props);
  return (
    <div className="weather">
      <p className="header">
        Hey <small>{user.name}</small>
      </p>

      {Object.keys(weather).length === 0 ? null : (
        <div className="location">
          <h5>
            {weather.name}, {weather.sys.country}
          </h5>
          <p>{Math.round(weather.main.temp)}*C</p>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
