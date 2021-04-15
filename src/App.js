import React, { useState, useEffect }from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as stationData from "./data/stations-tokyo.json";
import './index.css';

function App() {
  // viiewport
  const [viewport, setViewport] = useState({
    latitude: 35.6762,
    longitude: 139.6503,
    zoom: 10,
    width: "80vw",
    height: "80vh"
  })

  console.log(stationData[1]);
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
      
      </ReactMapGL>
    </div>
  );
}

export default App;
