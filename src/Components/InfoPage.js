 import React from "react";
import "./InfoPage.css";
import {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import YouTube, { YouTubeProps } from "react-youtube";


const InfoPage = () => {
   const {id} = useParams() 
   const url=`https://api.themoviedb.org/3/tv/${id}?api_key=dedc3e3d8091160db2f6256bf3a5bfad&language=en-US&append_to_response=videos`
   const[show, setShow]=useState(null)

   useEffect(() =>{
      axios.get(url)
      .then(response =>{
         setShow(response.data)
      })
   }, [url])

  const renderTrailer = () => {
      const trailer = show.videos.results.find(vid => vid.name === 'Official Trailer' || 'Series Trailer' || 'Trailer')

      const opts = {
         height: '600',
         width: '1600'
         }

      return (
         <YouTube className="youtube"
         videoId={trailer.key}
         opts={opts}
         
      />
      )

  }
  
   if(show){
 return (
      <div>
         <div className="Details">
            <div className="trailer">
               {console.log(show)}
               {show.videos ? renderTrailer() : <div className="trailer-placeholder">No Trailer Found </div>}
            
               {/* {show.videos ? <YouTube className="youtube"
                  videoId={show.videos.results.find(vid => vid.name === 'Official Trailer' || 'Series Trailer' || 'Trailer').key}
                  
               /> : <div className="trailer-placeholder">No Trailer Found </div>} */}
              </div>
              <h2>{show.name}</h2>
              <div className="Overview">Movie overview: {show.overview}</div>
              
               

         </div>
      </div>
      )
   }
   return(
      <div>
        No selected show.
      </div>

   )

        
   
}

 export default InfoPage;