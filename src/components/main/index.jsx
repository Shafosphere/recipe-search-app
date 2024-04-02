import "./styles.css";
import "./background.css"
import data from "../data/data-part-one";
import data_information from "../data/data-part-two";

import Navbar from "./navbar";
import SearchRecipe from "../search-input/search-bar";
import Results from "../search-result/search-results";
import RecipeInfo from "../search-information/recipe-information";

import { useState } from "react";

export default function Main() {
    const [searchResults, setResults] = useState(data)
    const [currentlyDisplay, setDisplay] = useState('Information')
    const [recipeInformation, setInfo] = useState(data_information)

    function handleCardClick(id) {
        console.log(id);
        // got data based on id
        // adding this data to recipeInformation
        setDisplay('Information')
    }
    function handleGoToHome() {
        setDisplay('Results');
    }
    function handleGoToFavoritues() {
        setDisplay('Favorite');
    }
    return (
        <div className="container-main">
            <div className="main-window">
                <Navbar goToHome={handleGoToHome}></Navbar>
                <SearchRecipe></SearchRecipe>
                {currentlyDisplay === 'Results' ? (
                    <Results data={searchResults} onCardClick={handleCardClick}/>
                ) : (
                    <RecipeInfo data={data_information}></RecipeInfo>
                )}
            </div>
        </div>
    )
}