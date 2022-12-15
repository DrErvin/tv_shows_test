
import {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css";
import ShowCard from "./Components/ShowCard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoPage from "./Components/InfoPage";
import Home from "./Components/Home";

const App = () => {

   

    return(
       <div>
                
                        <Routes>
                            <Route exact path="/" element={<Home/>} /> 
                            <Route exact path="/InfoPage/:id" element={<InfoPage />} /> 
                        </Routes>
                    
        </div>
    )
    
}
export default App;