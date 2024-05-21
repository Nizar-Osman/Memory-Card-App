import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlashCard from "./FlashCard";
import "./index.css";
import Quote from "./Quote";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const options = {
    method: "GET",
    url: "https://allah-name.p.rapidapi.com/name",
    headers: {
      "X-RapidAPI-Key": "edd84a6967msh0a4e80dadf0bdf0p18d4e4jsn3fd01c9c4057",
      "X-RapidAPI-Host": "allah-name.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data.main);
      setData(response.data.main);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nextPageHandler = () => {
    const nextPageIndex = currentPage + 1;
    if (nextPageIndex < Math.ceil(data.length / cardsPerPage)) {
      setCurrentPage(nextPageIndex);
    }
  };
  const prevPageHandler = () => {
    const prevPageIndex = currentPage - 1;
    if (prevPageIndex >= 0) {
      setCurrentPage(prevPageIndex);
    }
  };

  return (
    <>
      <div className="card-container">
        {data
          .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
          .map((item, index) => (
            <FlashCard
              key={index}
              arName={item.arName}
              enName={item.enName}
              meaning={item.meaning}
              explanation={item.explanation}
            />
          ))}
        <Quote />
      </div>
      <div className="button-container">
        <button
          className="prev-button"
          onClick={prevPageHandler}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="next-button"
          onClick={nextPageHandler}
          disabled={currentPage === Math.ceil(data.length / cardsPerPage) - 1}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
