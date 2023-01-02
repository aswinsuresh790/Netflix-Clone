
import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { APIkey,imageUrl } from './imagelink';
import { TopRate,Latest } from './imagelink';
import YouTube from'react-youtube'


function Moviecard(props) {

  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

 
  

const[videourl,setVideourl]=useState("")

  const[movie,setMovie]=useState([])
useEffect(()=>{
axios.get(props.url).then((response)=>{
 console.log(response.data.results) 
 setMovie(response.data.results)
}).catch(err=>{
  console.log(err)
})
},[])
const videoplay=(id)=>{
  setVideourl(!videourl)
 
}



const handlevideo=(id)=>{
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIkey}&language=en-US`).then((response)=>{
    console.log(response.data)
    setVideourl(response.data.results[0])
  })
}


 
  return (
    
    <div className='cards'>
        <h4>{props.title}</h4>
        <div className="card-img1">
      
          {movie.map((movies,index)=>
            < img  onClick={()=>handlevideo(movies.id)} className="card-img" key={index} src={`${imageUrl+movies.backdrop_path}`} alt={movies.title} />
          
            
          )}
          
      
   
 
      </div>
   {videourl  &&   <YouTube videoId={videourl.key} opts={opts}/>}
     
     
    </div>
    
  )
}

export default Moviecard
