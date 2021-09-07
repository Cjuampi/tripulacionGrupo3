import React, { useEffect } from "react";
import L from "leaflet";
import "./Map.css";
import '../../App.css';


function Map() {
  useEffect(() => {
    // create map
    L.map("map", {
      center: [40.4233784, -3.692763,15],
      zoomControl:false,
      attributionControl:false,
      zoom: 15,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution: 
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  return <div id="map" style={{ height: "25vh" }} />;
}

export default Map;