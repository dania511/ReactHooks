import React from 'react';
import {Card }from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Description(props) {
  let {film}=props.location.state
  console.log(props)
    return (
     
         <div >
  <Card style={{ width:'1500px' ,height:'600px'}} >
  <Card.Body>
    <Card.Title><h1>{props.location.state.film.title} </h1></Card.Title>
    <Card.Text><p>{props.location.state.film.description} </p></Card.Text>
  <div>

 <iframe width="420" height="300"    src={props.location.state.film.brief}>
</iframe>
 </div>
  <div><Link to='/'>Back To Home</Link></div>
  </Card.Body>
</Card>
        </div>
    )
}

export default Description