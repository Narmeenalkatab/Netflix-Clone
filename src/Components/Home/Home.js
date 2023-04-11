import MoviesList from "../MovieList/MovieList";
import { useEffect, useState } from "react";
// import ModalMovie from "../ModalMovie/ModalMovie";
export default function Home(){


      const [trending, setTrending] = useState([]);

      async function getTrending() {
        const url = process.env.REACT_APP_Trend_URL;
        const response = await fetch(`${url}/trending`);

        const trendingData = await response.json();
        setTrending(trendingData);
      }


      function commentHandler(newtrending, id) {
        trending.map((trending) => {
          if (trending.id === id) {
            trending.userComment = newtrending.userComment;
            return trending;
          } else {
            return trending;
          }
        });
      }

      useEffect(() => {
        getTrending();
      }, []);

return (
  <>
    <h1>this is home page</h1>
    <MoviesList data={trending} commentHandler={commentHandler} />

  </>
);

}