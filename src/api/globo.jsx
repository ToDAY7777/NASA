import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Goblo.css";

const NASA_API_KEY = "dKMW4tPlbPudGa7feLJdpmMDIoAdj2ZeTLTsDa74";
const NASA_APOD_URL = "https://api.nasa.gov/planetary/apod";


const videoName = "espacio.mp4";  

const NasaApod = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [date, setDate] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(""); 
  const navigate = useNavigate();

  const fetchApod = async (selectedDate) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${NASA_APOD_URL}?api_key=${NASA_API_KEY}&date=${selectedDate}`);
      if (!response.ok) throw new Error("Error fetching APOD data");
      const data = await response.json();
      setApodData(data);
      setBackgroundImage(data.url); 
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (date) {
      fetchApod(date);
    }
  };

  return (
    <div className="apod-container">
     
      <div className="background-container">
        
        {backgroundImage ? (
          <img src={backgroundImage} alt="NASA APOD" className="background-image" />
        ) : (
          <video autoPlay loop muted className="background-video">
            <source src={`/videos/${videoName}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title"> PICTURE OF YOUR BIRTHDAY </h1>

        <div className="search-container">
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="date-input" 
          />
          <button onClick={handleSearch} className="search-button"> Search</button>
        </div>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">Error: {error}</p>}

        {apodData && (
          <div className="apod-info">
            <h2>{apodData.title}</h2>
            <p>{apodData.date}</p>
            <p>{apodData.explanation}</p>
            {apodData.copyright && <p>© {apodData.copyright}</p>}
          </div>
        )}

        <div className="button-group">
          <button onClick={() => navigate("/cam")} className="nav-button"> Satellite</button>
          <button onClick={() => navigate("/com")} className="nav-button"> Last Days</button>
        </div>
      </div>
    </div>
  );
};

export default NasaApod;
