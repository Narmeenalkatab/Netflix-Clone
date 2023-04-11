import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ModalMovie from "../ModalMovie/ModalMovie";
import { useState } from "react";




export default function Movie(props){
const [show, setShow] = useState(false);

const handleClose= () => setShow(false);
const handleShow= () => setShow(true);

return (
  <>
    <Card id="card" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${props.data.poster_path} `}
      />

      <Card.Body id="body">
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.overview}</Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Add to favorite list
        </Button>
      </Card.Body>
    </Card>
    <ModalMovie
      show={show}
      data={props.data}
      handleClose={handleClose}
      commentHandler={props.commentHandler}
    />
  </>
);
}