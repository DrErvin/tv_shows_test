import React from "react";
import ShowCard from "./ShowCard";
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoPage from "./InfoPage";
import {useEffect, useState} from "react";

const Home = () => {
   const [navData, setNavData] = useState("Home")
   const API_URL = "https://api.themoviedb.org/3"
   const API_KEY = "dedc3e3d8091160db2f6256bf3a5bfad"
   const [shows, setShows] = useState([])
   const [searchKey, setSearchKey] = useState("")
   const [selectedShow, setSelectedShow]=useState({})


   const fetchShows = async(searchKey)=>{ 
       const type = searchKey ? "search/tv" : "/tv/top_rated" 
       const {data: {results}} = await axios.get(`${API_URL}/${type}`, {
           params: {
               api_key: API_KEY,
               query: searchKey
           }
           })  
       
           setSelectedShow(results[0])
       setShows(results)
   }
   

   useEffect(() => {
       fetchShows()
   }, [])

   const renderShows = () => (
       shows.map(show => (
           <ShowCard
               key={show.id}
               show={show}
           />
       ))
   )

   const searchMovies = (e) =>{
       e.preventDefault()
       fetchShows(searchKey)
   }

  
   
   return( 
      <div>
      
    <div className="App">

          

      <span className="header">
      <button className="btn styleTop" onClick={ () => setNavData("tv-shows")}>
          TV SHOWS
      </button>
      <button className="btn styleBottom" onClick={ () => setNavData("movies")}>
          MOVIES
      </button>
      </span>
      <span className="header-search">
      <form onSubmit={searchMovies}>
          <input type="text" placeholder="Search..."
          onChange={(e) => setSearchKey(e.target.value)} autoFocus required/>
          <button type={"submit"}>Find</button>

      </form>
      </span>
      
      <div className="container">
          <div className="grid">
              <div className="cards">
          {searchKey ? renderShows() : renderShows().slice(0,10)}
              </div>
          </div>
      </div>


  </div> 
  {/* {tvMazeData} */}
</div>

   )
}

export default Home;