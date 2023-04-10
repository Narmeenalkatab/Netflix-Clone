import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";


export default function ModalMovie(props){

const [showComment, setShowComment] = useState(false);
const handleComment = () => setShowComment(!showComment);

  function commentState() {
    return showComment ? "Cancel comment" : "Add comment";
  }


 return (
   <>
     <Modal show={props.show} onHide={props.handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Adding data to FAVpage</Modal.Title>
       </Modal.Header>

       <img
         src={`https://image.tmdb.org/t/p/w500${props.data.poster_path} `}
         alt={props.data.title}
       />

       <Modal.Body>{props.data.overview}</Modal.Body>
       {showComment ? (
         <Form id="form">
           <Form.Group
             className="mb-3"
             controlId="exampleForm.ControlTextarea1"
           >
             <Form.Control
               as="textarea"
               rows={3}
               placeholder="Add your comment here"
             />
           </Form.Group>
         </Form>
       ) : null}

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
