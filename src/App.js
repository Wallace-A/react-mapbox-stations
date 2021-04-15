import React, { useState, useEffect }from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as stationData from "./data/stations.json";
import './index.css';

function App() {
  const [selectedStation, setSelectedStation] = useState([]);
  // viiewport
  const [viewport, setViewport] = useState({
    latitude: 35.6500,
    longitude: 139.7500,
    zoom: 10,
    width: "80vw",
    height: "80vh"
  })
  useEffect(() => {
    //map over data and get stations

  }, []);
  console.log(stationData.default);
  return (
    <div className="App">
      <ReactMapGL
      {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/wallace-a/ckn9vqev925hp17pg7zu5ea1j"
      onViewportChange={viewport =>{
        setViewport(viewport);
      }}
      >
      
        {/* iterate over park data */}
        {stationData.default.map((station) => (
          <Marker
          longitude={station.lon}
          latitude={station.lat}
          
          >
            <button 
            className="marker-btn">
              <img src="/skateboarding.svg" alt="Skatepark Icon"/>
            </button>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
