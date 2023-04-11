import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { useState } from "react";
import { useRef } from "react";

export default function ModalMovie(props){

const comment = useRef();

  function submitHandler(e){
    e.preventDefault();
    let userComment = comment.current.value;
    let newMovie={...props.data, userComment}
    // const { commentHandler } = props;
  props.commentHandler(newMovie, newMovie.id);
   addHandler(e);
  }

 async function addHandler(e){
   e.preventDefault();
   let url = `${process.env.REACT_APP_Trend_URL}/addMovie`;

   let data1 = {
     title: props.data.title,
     release_date: props.data.release_date,
     overview: props.data.overview,
     poster_path: `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`,
     comments: props.data.comments,
   };
   const response = await fetch(url, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data1),
   });

   const receivedData = await response.json();

   if (response.status === 201) {
     alert("successfully added to database");
   }

 }


 return (
   <>
     <Modal show={props.show} onHide={props.handleClose} animation={false}>
       <Modal.Header closeButton>
         <Modal.Title>Adding data to FAVpage</Modal.Title>
       </Modal.Header>

       <img
         src={`https://image.tmdb.org/t/p/w500${props.data.poster_path} `}
         alt={props.data.title}
       />

       <Modal.Body>{props.data.overview}</Modal.Body>
       {/* {props.data.userComment ? props.data.userComment : "No comment Added "} */}

       <Form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Enter a comment here </Form.Label>

           <Form.Control
             id="textarea"
             ref={comment}
             as="textarea"
             rows={3}
             placeholder="Enter your comment "
           />

         </Form.Group>
         <Button
           variant="primary"
           type="submit"
           onClick={(e) => submitHandler(e)}
         >
           add to movie
         </Button>
       </Form>

       <Modal.Footer>
         <Button variant="secondary" onClick={props.handleClose}>
           Close
         </Button>
         <Button variant="primary" onClick={(e) => submitHandler(e)}>
           Submit
         </Button>
         <Button variant="primary" onClick={(e) => addHandler(e)}>
           add to favorite
         </Button>
       </Modal.Footer>
     </Modal>
   </>
 );


}
