import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./scroll.css";

const NASA_API_KEY = "dKMW4tPlbPudGa7feLJdpmMDIoAdj2ZeTLTsDa74";
const NASA_APOD_URL = "https://api.nasa.gov/planetary/apod";

const Scroll = () => {
  const [apodDataList, setApodDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApods = async () => {
      setLoading(true);
      setError(null);
      try {
        const daysAgo = 10;
        const requests = Array.from({ length: daysAgo }, (_, i) => {
          const date = new Date(currentDate);
          date.setDate(date.getDate() - i);
          const formattedDate = date.toISOString().split("T")[0];

          return fetch(`${NASA_APOD_URL}?api_key=${NASA_API_KEY}&date=${formattedDate}`)
            .then((response) => response.json());
        });

        const results = await Promise.all(requests);
        setApodDataList(results.filter(apod => apod.media_type === "image"));
      } catch (error) {
        setError(" Ocurrió un error al obtener los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchApods();
  }, [currentDate]);

  return (
    <div className="scroll-container">
      
      <h1 className="title"> 10 LAST DAYS  </h1>

      
      {loading && <div className="loading-spinner"></div>}
      {error && <p className="error-message">{error}</p>}

     
      <div className="scroll-gallery">
        {apodDataList.map((apodData, index) => (
          <div key={index} className="image-card">
            <img src={apodData.url} alt={apodData.title} />
            <h3>{apodData.title}</h3>
            <p>{apodData.date}</p>
          </div>
        ))}
      </div>

      
      <button onClick={() => navigate(-1)} className="back-button">
        Return
      </button>
    </div>
  );
};

export default Scroll;
