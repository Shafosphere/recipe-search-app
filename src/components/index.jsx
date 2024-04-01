import "./styles.css";

import data from "./data-part-one";
import data_information from "./data-part-two";

import Navbar from "./navbar";
import SearchRecipe from "./search-bar";
import Results from "./search-results";

import { useState } from "react";

export default function Main(){
    const[searchResults ,setResults] = useState(data)
    return (
        <div className="container-main">
            <div className="main-window">
                <Navbar></Navbar>
                <SearchRecipe></SearchRecipe>
                <Results data={searchResults}></Results>
            </div>
        </div>
    )
}