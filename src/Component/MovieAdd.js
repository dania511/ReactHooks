import React ,{useState} from 'react'
import {Button,Modal} from "react-bootstrap"

function MovieAdd({add}) {
    
        const [show, setShow] = useState(false);
        const [newMovie,setnewMovie] = useState([]);
        const handleChange=(e)=>{
            setnewMovie({...newMovie,[e.target.name]:e.target.value})
        };
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow} style={{ margin: '20px ' , width:'250px' }}>
              Add Movie
            </Button>
      
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{display:'flex',flexDirection:'column'}}>
              <label>Title</label> <input name='title' onChange={handleChange} type="text" placeholder="Movie's title"></input><br></br>
              <label>description</label> <input name='description' onChange={handleChange} type="text" placeholder="descrption or summary.."></input><br></br>
              <label>Poster</label><input name='posterUrl'onChange={handleChange} type="url" placeholder="poster url..."></input><br></br>
              <label>Rate</label><input name='rate'onChange={handleChange} type="number" placeholder="rating.."></input><br></br>
          </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={()=>add(newMovie)}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
    

export default MovieAdd
