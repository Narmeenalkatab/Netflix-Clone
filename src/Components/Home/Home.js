import MoviesList from "../MovieList/MovieList";
import { useEffect, useState } from "react";

export default function Home(){


      const [trending, setTrending] = useState([]);

      async function getTrending() {
        const url = process.env.REACT_APP_Trend_URL;
        const response = await fetch(`${url}/trending`);

        const trendingData = await response.json();
        setTrending(trendingData);
      }

      useEffect(() => {
        getTrending();
      }, []);

return (
  <>
    <h1>this is home page</h1>
    <MoviesList data={trending} />
  </>
);

}