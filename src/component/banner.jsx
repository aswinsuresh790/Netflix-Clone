import React ,{ useEffect,useState} from 'react'

import { APIkey,imageUrl } from './imagelink';
import axios from 'axios';
import { FaPlay,FaRegEye} from 'react-icons/fa';


function Banner() {
  const[movie,setMovie]=useState([])
  useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIkey}`).then((response)=>{
   console.log(response.data.results) 
   setMovie(response.data.results[1])
  }).catch(err=>{
    console.log(err)
  })
  },[])
  return (
    <div  className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""} )`}}>
  
       <div className='banner-movie'>
       
        <ul>
            <li><h1 >{movie.title}</h1></li>
            
            <li>{movie.overview}</li>
            
           
        </ul>
  
       </div>
       <div className="button-banner">
        <button className='play'><FaPlay/>Play</button>
        <button className='more'><FaRegEye/>More Info </button>

       
        
        </div>
        <div className="banner-bottom"></div>
       
        
       
        
       

      
    </div>
  )
}

export default Banner
