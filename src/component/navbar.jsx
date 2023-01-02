import axios from "axios";
import React from "react";
import { useState } from "react";
import Moviecard from "./Moviecard";
import Searchmovies from "./Searchmovies";
function Navbar(props){
    


    
    return(
        <div>
        <header>
            <nav className="navbar">
               <div><img className="netflix-logo" src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png" alt="netflix-logo" />
               
               </div> <div>
               <form onSubmit={props.submitForm}><input className="Textsearch" type="text" value={props.moviesearch} onChange={((e)=>{
                props.setMoviesearch(e.target.value)
               })}
                />
               <input  className="textbutton-search" type="submit" name="sumbit" id="sumbit" value="SEARCH" />
               </form><img  className="avatar-image" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
               </div> 
            </nav>
        </header>
        <div>
        {props.search.map((movies,index)=>
        <Searchmovies  movies={movies}  />
        )}
        </div>
        </div>
    )
}
export default Navbar;