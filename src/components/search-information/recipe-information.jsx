import "./styles-recipe-information.css"
import "./flipswitch.css"

import TopContainer from "./components/top-container";
import BotContainer from "./components/bot-container";
export default function RecipeInfo({ data }) {
    return (
        <div className="container-info">
            <TopContainer data={data}/>
            <BotContainer data={data}/>
        </div>
    )
}