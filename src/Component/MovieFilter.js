import React from 'react'
import ReactStars from "react-rating-stars-component";

function MovieFilter({filterText,filterRate}) {
    return (
        
        <div className="rate">
            <h2 style={{ margin: '10px ', color:'#00FFFF' }}>Filter Movie:</h2>
            <input onChange={(e)=>filterText(e.target.value)}></input>
           <div style={{ width: '110px', margin:'0px 5px 15px 070px'}}>
            <ReactStars 
    count={5}
    onChange={(newRating)=>filterRate(newRating)}
    size={24}
    activeColor="#ffd700"
    
       />
      </div>  </div>
    )
}

export default MovieFilter

