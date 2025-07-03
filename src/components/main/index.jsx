import "./styles.css";
import "./background.css";
import Navbar from "./navbar";
import SearchRecipe from "../search-input/search-bar";
import Results from "../search-result/search-results";
import RecipeInfo from "../search-information/recipe-information";
import Favorite from "../favorite/favorite";
import Footer from "./footer";

import { useState, useEffect } from "react";

export default function Main() {
  const data = [];
  const [searchResults, setResults] = useState(data);
  const [clickedResult, setClicedResult] = useState();
  const [currentlyDisplay, setDisplay] = useState("Information");
  const [favList, setList] = useState(() => {
    const stored = localStorage.getItem("favoriteRecipes");
    return stored ? JSON.parse(stored) : [];
  });
  const [food, setFoodName] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;

  function setFavorite(id, image, title, summary) {
    const existingObject = favList.find((item) => item.id === id);
    if (!existingObject) {
      const newFavorite = {
        id: id,
        title: title,
        image: image,
        summary: summary,
      };
      setList([...favList, newFavorite]);
    }
  }

  function removeFavorite(id) {
    setList(favList.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favList));
  }, [favList]);

  async function fetchfoodData() {
    try {
      const localdata = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${food}&apiKey=${API_KEY}`
      );
      const jsonData = await localdata.json();
      setResults(jsonData);
      setDisplay("Results");
    } catch (error) {
      console.error("Error, cannot take data:", error);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      fetchfoodData();
    }
  }
  function TypeAFoodName(e) {
    setFoodName(e.target.value);
  }

  async function handleCardClick(id) {
    try {
      const localdata = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
      );
      const jsonData = await localdata.json();
      setClicedResult(jsonData);
      setDisplay("Information");
    } catch (error) {
      console.error("Error, cannot take data:", error);
    }
  }
  function handleGoToHome() {
    setDisplay("Results");
  }
  function handleGoToFavorite() {
    setDisplay("Favorite");
  }
  return (
    <div className="container-main">
      <div className="main-window">
        <Navbar goToHome={handleGoToHome} goToFavorite={handleGoToFavorite} />
        <SearchRecipe
          handleKeyPress={handleKeyPress}
          TypeAFoodName={TypeAFoodName}
        />
        {searchResults.length === 0 ? (
          <div className="loader-container">
            <div className="loader"></div>
            <span className="not-data">Find your next meal 🍲</span>
          </div>
        ) : (
          <>
            {currentlyDisplay === "Results" && (
              <Results data={searchResults} onCardClick={handleCardClick} />
            )}
            {currentlyDisplay === "Information" && (
              <RecipeInfo data={clickedResult} setFav={setFavorite} />
            )}
          </>
        )}

        {currentlyDisplay === "Favorite" && (
          <Favorite
            favList={favList}
            onCardClick={handleCardClick}
            removeFav={removeFavorite}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}
