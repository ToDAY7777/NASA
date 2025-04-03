import React from "react";
import "./cam.css"; 

const data = {
  date: "2018-01-03T16:50:46.894000",
  dataset: "LANDSAT/LC08/C02/T1_L2",
  planet: "Earth",
  service_version: "v5000",
  url: "https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=dKMW4tPlbPudGa7feLJdpmMDIoAdj2ZeTLTsDa74"
};

const EarthImagePage = () => {
  return (
    <div className="earth-container">
      
      <video autoPlay loop muted className="bg-video">
        <source src="/public/videos/estrellas.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      
      <div className="earth-info">
        <h1> LANDSAT SATELLITE IMAGE </h1>
        <p><strong>Date:</strong> {new Date(data.date).toLocaleString()}</p>
        <p><strong>Dataset:</strong> {data.dataset}</p>
        <p><strong>Planet:</strong> {data.planet}</p>
        <p><strong>Service Version:</strong> {data.service_version}</p>
        
        
        <a href={data.url} target="_blank" rel="noopener noreferrer" className="view-image-btn">
          View Full Image
        </a>
      </div>
    </div>
  );
};

export default EarthImagePage;
