import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap/Button";
import { useState } from "react";

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ModalMovie(props){

 const [comment, setComment] = useState(false);
 const handleComment = () => setComment(!Comment);

function commentState() {
  return comment ? "Cancel comment" : "Add comment";
}


//   fetch("/addMovie", {
//     method: "POST",
//     headers: {
//       "text": "application/json",
//     },
//     body: JSON.stringify({ movie, comment }),
//   });




 return (
   <>
     <Modal show={props.show} onHide={props.handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>{props.data.title}</Modal.Title>
       </Modal.Header>

       <img src={props.data.poster_path} alt={props.data.title} />
       <Modal.Body>{props.data.overview}</Modal.Body>



       {Comment ?
       <Form>
       <Form.Group controlId="formComment"></Form.Group>
       <Form.Label>Comment</Form.Label>
       <Form.Control type="textarea" placeholder="Enter a comment here " value={comment}  />
       </Form>
       : null}

       <Modal.Footer>
         <Button variant="secondary" onClick={props.handleClose}>
           Close
         </Button>
         <Button variant="primary" onClick={handleComment}>
           {commentState()}
         </Button>
         <Button variant="primary" onClick={props.handleClose}>
           Save Changes
         </Button>
       </Modal.Footer>
     </Modal>
   </>
 );


}