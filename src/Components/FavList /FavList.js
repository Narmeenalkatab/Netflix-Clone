import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import Form from "react-bootstrap/Form";

export default function FavList() {

const [favorite, setFavorite] = useState([]);
const updateRef = useRef();

 const  getFavorite = async () => {
        let url = `${process.env.REACT_APP_Trend_URL}/favList`;

       let response = await fetch(url , {
          method: "GET",
        });

       let dataFav = await response.json();
       setFavorite(dataFav);
    };

  function submitHandler(e, id, title, comments, poster_path) {
    e.preventDefault();

    if (updateRef.current) {
      let NewComment = updateRef.current.value;

      UpdateHandler(e, id, title, NewComment, poster_path);
    } else {
      console.log("null ");
    }
  }

const handleDelete = async (id) => {
  const url = `${process.env.REACT_APP_Trend_URL}/deletefavList${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 204) {
    getFavorite();
  }
}


useEffect(() => {
  getFavorite();
}, []);


  async function UpdateHandler(e, id, title, newComment, poster_path) {
    e.preventDefault();

    let url = `${process.env.REACT_APP_Trend_URL}/UPDATE/${id}`;

    let data = {
      title: title,
      poster_path: poster_path,
     comments: newComment,
    };

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const receivedData = await response.json();

    if (response.status === 200) {
     getFavorite();
    }
  }


 return (
   <>
     <h1>Favorite List</h1>
     <div id="card-container">
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
              <Form>
                <Form.Group className="form" controlId="formBasicEmail">
                  <Form.Label>Update your comment</Form.Label>
                  <Form.Control
                    ref={updateRef}
                    type="text"
                    placeholder="Update your comment"
                  />
                 
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) =>
                    submitHandler(
                      e,
                      data.id,
                      data.title,
                      data.overviewandcomments,
                      data.poster_path
                    )
                  }
                >
                  Update
                </Button>
              </Form>
              <Card.Text>Comment: {data.comment}</Card.Text>
              <Button variant="primary" onClick={() => handleDelete(data.id)}>
                Delete
              </Button>
              <Button variant="primary" onClick={() => UpdateHandler(data.id)}>
                Update
              </Button>
            </Card.Body>
          </Card>
        );})}
     </div>
   </>
 );







}
