import React from "react";

import './App.css';

function App() {
  return (
    <div className="weather-app">
      <header>
        <form id="search-engine">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="enter-city"
            id="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>

      <hr />

      <main>
        <div className="current-weather">
          <div>
            <h1>Copenhagen</h1>
            <p>
              <span id="currently">Saturday 20:36</span>, moderate rain
              <br />
              Humidity: <strong>87%</strong>, Wind: <strong> 7.2km/h </strong>
            </p>
          </div>
          <div className="temperature-now">
            <span className="emoji">☀️</span>
            14
            <span className="celcius">°C</span>
          </div>
        </div>
      </main>

      <hr />

      <footer>
        <p>
          This project was coded by {" "}
          <a
            href="https://www.shecodes.io/graduates/137438-felicia-audrey"
            target="_blank" rel="noopener noreferrer"
            >Felicia Audrey {" "}</a>
          and is <a href="https://github.com/felicialatte" target="_blank" rel="noopener noreferrer"> on GitHub</a> and {" "}
          <a href="https://react-cuaca-weather-app.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
