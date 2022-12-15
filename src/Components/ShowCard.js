import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoPage from "./InfoPage";
import App from "../App";
import { useNavigate } from "react-router-dom";
import("./ShowCard.css");

const ShowCard = ({show}) =>{
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w400"
    // console.log(show)
    let navigate = useNavigate();

    return(
        <div className="flexbox-container">
        <div className="card">
            <div className="container">
            {show.poster_path ? <img className="show-cover" src={IMAGE_PATH + show.poster_path} alt={show.name}/> 
            : <div className="show-placeholder">No Image Found </div>}

                <div className="show-card">
                <button className="btn-card" onClick={() => {navigate(`/InfoPage/${show.id}`)}}> {show.name}</button>
               
                    {/* <Router>
                        <Routes>
                            <Route path="/InfoPage" element={<InfoPage />} > <h5> {show.name}</h5></Route>
                        </Routes>
                    </Router> */}
                </div>
                </div>
            </div>
        </div>

    )

}

export default ShowCard;