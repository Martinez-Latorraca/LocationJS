import React from "react";
import Map from "./Map";
import credential from "./credential"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map  googleMapURL ={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credential.mapKey}&libraries=places`} 
            loadingElement = {<div style={{ height: `100%` }} />}
            containerElement = {<div style={{ height: `965px` }} />}
            mapElement = {<div style={{ height: `100%` }} />}
            
        />
        
      </header>
    </div>
  );
}

export default App;
