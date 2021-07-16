
import React ,{useState} from "react";
import {Card,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"
import {Link} from 'react-router-dom'

function MovieCard({film}) {
    return (
        <div>
            
          <Card style={{ width: '250px', height:'500px', marginBottom: '20px' }}>
  <Card.Img variant="top" style={{ width: '248px', height:'300px' }} src={film.posterUrl} />
  <Card.Body>
    <Card.Title style={{ color: 'black' }}>{film.title}</Card.Title>
    <ReactStars 
    count={5}
    value={film.rate}
    edit={false}
    size={24}
    activeColor="#ffd700"
  />
   
   
   <Link  to={{ pathname:`/description/${film.title}`, state: {film} }}><Button variant="primary">Show More</Button></Link>
   
  </Card.Body>
</Card>  

        </div>
    )
}

export default MovieCard
