import "./styles-recipe-information.css";
import "./flipswitch.css";

import TopContainer from "./components/top-container";
import BotContainer from "./components/bot-container";
export default function RecipeInfo({ data, setFav }) {
  return (
    <div className="container-info">
      <TopContainer data={data} setFav={setFav} />
      <BotContainer data={data} />
    </div>
  );
}
