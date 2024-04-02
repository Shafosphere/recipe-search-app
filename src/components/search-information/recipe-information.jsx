import "./styles-recipe-information.css";
import { CiBookmarkPlus } from "react-icons/ci";

export default function RecipeInfo({ data }) {
    return (
        <div className="container-info">
            <TopContainer data={data} />
            <BottomContainer data={data} />
        </div>
    );
}

function TopContainer({ data }) {
    return (
        <div className="top-container-info">
            <CiBookmarkPlus className="icon-info" />
            <div className="top-container-head-info">
                <TopContainerHeadLeft data={data} />
                <TopContainerHeadRight data={data} />
            </div>
            <div className="top-container-footer-info">
                {/* chart js */}
            </div>
        </div>
    );
}

function TopContainerHeadLeft({ data }) {
    return (
        <div className="top-container-head-left-info">
            <img src={data.image} alt={data.title} />
        </div>
    );
}

function TopContainerHeadRight({ data }) {
    return (
        <div className="top-container-head-right-info">
            <div className="top-container-head-right-title-info">
                {data.title}
            </div>
            <div className="top-container-head-right-body-info">
                <ul>
                    <li>Preparation Time: {data.readyInMinutes} minutes</li>
                    <li>Servings: {data.servings}</li>
                    <li>Health Score: {data.healthScore}</li>
                </ul>
            </div>
        </div>
    );
}

function BottomContainer({ data }) {
    return (
        <div className="bot-container-info">
            <BotContainerLeft data={data} />
            <BotContainerRight data={data} />
        </div>
    );
}

function BotContainerLeft({ data }) {
    return (
        <div className="bot-container-left-info">
            <div className="bot-container-left-header-info">
                Ingredients
            </div>
            <div className="bot-container-left-list-info">
                {data.extendedIngredients.map((item, index) => (
                    <BotContainerLeftListItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
}

function BotContainerLeftListItem({ item }) {
    return (
        <div className="bot-container-left-list-items-info">
            <div className="bot-list-img-info">
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt={item.image} />
            </div>
            <span className="bot-list-amount-info">
                {item.measures.metric.amount}&nbsp;{item.measures.metric.unitShort}
            </span>
            <span className="bot-list-name-info">{item.name}</span>
        </div>
    );
}

function BotContainerRight({ data }) {
    return (
        <div className="bot-container-right-info">
            <h4>How to Make</h4>
            <div>
                {data.analyzedInstructions[0].steps.map((item, index) => (
                    <BotContainerRightStepItem item={item} index={index} key={index} />
                ))}
            </div>
        </div>
    );
}

function BotContainerRightStepItem({ item, index }) {
    return (
        <div key={index}>
            <h5>Step {index + 1}</h5>
            {item.step}
            <div>
                <p>
                    {item.ingredients.map((ingredient) => (
                        <div key={ingredient.id}>{ingredient.name}</div>
                    ))}
                    {item.equipment.map((equipment) => (
                        <div key={equipment.id}>{equipment.name}</div>
                    ))}
                </p>
            </div>
        </div>
    );
}
