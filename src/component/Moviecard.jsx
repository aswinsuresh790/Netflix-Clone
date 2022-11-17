
import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { APIkey,imageUrl } from './imagelink';
import { TopRate,Latest } from './imagelink';


function Moviecard(props) {

  const[movie,setMovie]=useState([])
useEffect(()=>{
axios.get(props.url).then((response)=>{
 console.log(response.data.results) 
 setMovie(response.data.results)
}).catch(err=>{
  console.log(err)
})
},[])
 
  return (
    
    <div className='cards'>
        <h4>{props.title}</h4>
        <div className="card-img1">
          {movie.map((movies,index)=>
            <img className="card-img" key={index} src={`${imageUrl+movies.backdrop_path}`} alt={movies.title} />
          
            
          )}
          
      
   
 
      </div>

    
    </div>
  )
}

export default Moviecard
