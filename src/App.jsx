import React from  'react';
import { useState } from 'react';
import './App.css';
import Banner from './component/banner';
import { Latest ,TopRate,Popular} from './component/imagelink';
import Moviecard from './component/Moviecard';
import Navbar from './component/navbar';
import axios from 'axios';




function App() {
  


const[moviesearch,setMoviesearch]=useState("")
  const[search,setSearch]=useState([])
  const[small,setSmall]=useState()
  const apikey=13891166
  const urlomdb=`https://www.omdbapi.com/?s=${moviesearch}&page=2&apikey=${apikey}`
  const getData=async()=>{

    const result= await axios.get(urlomdb)
        console.log(result)
    setSearch(result.data.search)
    }
    const submitForm=(e)=>{
      e.preventDefault()
      getData()
    }




  
  return (
    <div className="App">
      
       

 <Navbar urlvalue={urlomdb} submitForm={submitForm} search={search} setSearch={setSearch} moviesearch={moviesearch} setMoviesearch={setMoviesearch} />
   
 <Banner/>
 
 <Moviecard title="Latest" url={Latest} />
 <Moviecard title="TopRate" url={TopRate} small/>
 <Moviecard title="Popular" url={Popular} small/>
 <div>
 
 </div>
 
    </div>
  );
}

export default App;