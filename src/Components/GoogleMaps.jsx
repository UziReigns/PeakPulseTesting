"use client";
import './GoogleMaps.css';
import { APIKEY , MAPID} from '../../APIKEY'
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
} from "@vis.gl/react-google-maps"
import { useNavigate } from 'react-router-dom';
import data from "./data.json";
function GoogleMaps() {

  const navigate = useNavigate();

  const handleSuggestionClick = (suggestion) => {
    console.log("Clicked suggestion:", suggestion);
    localStorage.setItem('selectedName', suggestion.name);
    localStorage.setItem('selectedData', JSON.stringify(suggestion));
    navigate('/statistics');
}

    let position = { lat: 33.6846, lng: -117.8265}
  return (
    <APIProvider apiKey={APIKEY()}>
        <div style={{height: "500px", width: "500px"}}>
            <Map defaultZoom={14} defaultCenter={position} mapId={MAPID()}>
            {data.map((suggestion, index) => {
              console.log(suggestion.coordinates);
              return (<AdvancedMarker key={index} position={suggestion.coordinates} onClick={() => handleSuggestionClick(suggestion)}>
                <Pin background={"grey"} glyphColor={"white"} borderColor={"grey"}/>
              </AdvancedMarker>)
            })}
            </Map>
        </div>
    </APIProvider>
  )
}   

export default GoogleMaps