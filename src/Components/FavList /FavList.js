import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";



export default function FavList() {

const [favorite, setFavorite] = useState([]);

 const  getFavorite = async () => {
      const url = process.env.REACT_APP_Trend_URL;
      await fetch(`${url}/trending`);
        const response = await fetch(`${url}/favorite`, {
          method: "GET",
        });

       const dataFav = await response.json();
       setFavorite(dataFav);
    };
useEffect(() => {
  getFavorite();
}, []);


const handleDelete = async (id) => {
  const url = process.env.REACT_APP_Trend_URL;
  const response = await fetch(`${url}/deleteFavList${id}`, {
    method: "DELETE",
  });

  if (response.status === 204) {
    getFavorite();
  }
}


useEffect(() => {
    getFavorite();
})



 const handleUpdate = async (id, comment) => {
     const url = process.env.REACT_APP_Trend_URL;
   try {

     await fetch(`${url}favorites/${id}`, {
       method: "PUT",
       body: JSON.stringify({ comment }),
       headers: { "Content-Type": "application/json" },
     });
     setFavorite(
       favorite.map((favorite) => {
         if (favorite.id === id) {
           return { ...favorite, comment };
         }
         return favorite;
       })
     );
   } catch (error) {
     console.error("Error updating favorite:", error);
   }
 };



 return (
   <>
     <h1>Favorite List</h1>
     <div className="card-container">
       {
     favorite && favorite.map((data) => {

        return (
          <Card key={data.id} className="mb-3">
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>Comment: {data.comment}</Card.Text>
              <Button
                variant="primary"
                onClick={() => handleDelete(data.id)}
              >
                Delete
              </Button>
              <Button
                variant="primary"
                onClick={() => handleUpdate(data.id, data.comment)}
              >
                Update
              </Button>
            </Card.Body>
          </Card>
        );})}
     </div>
   </>
 );







}
