import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom'

function Trailer({movies}) {
    const params = useParams();
    const movie=movies.filter((el)=>el.id==params.id) [0];
  return (
    <div  style={{backgroundColor: 'black' , height: '100vh' }}>
<img  style={{width: '50%' , height: '50%',display: 'flex', alignItems:'center' , marginLeft: '356px' , marginTop: '50px' , borderRadius: '10px' , boxShadow: '10px 10px'}}src={movie.posterurl}/>
<h1 style={{color: 'white'}}> {movie.name}</h1>
<p style={{color: 'white'}}>{movie.description}</p>
<ReactStars 
count={5} 
size={24} 
activeColor="#ffd700" 
edit={false} 
value={movie.rating}
/>
 
    </div>
  )
}

export default Trailer