import "./bot.css"
import { useState } from "react";
export default function BotContainer({ data }) {
    const [system, setSystem] = useState('metric')
    const [servings, setServings] = useState(data.servings)
    function handleSystemChange() {
        setSystem(system === 'metric' ? 'us' : 'metric');
    };
    function handleServingChange(e) {
        setServings(e.target.value);
    }
    function amount(value, unitShort) {
        let output = ((value * servings) / data.servings);
        return (system === 'metric' ? Math.floor(output) : output);
    }
    return (
        <div className="bot-container-info">
            <div className="bot-container-left-info">
                <div className="bot-container-left-header-info">
                    <span className="bot-container-left-title">
                        Ingredients
                    </span>
                    <span className="input-number-container">
                        Servings: &nbsp;
                        <input className="bot-container-left-servings" onChange={handleServingChange} value={servings} type="number" />
                    </span>
                    <div className="flipswitch">
                        <input onChange={handleSystemChange} type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs" defaultChecked />
                        <label className="flipswitch-label" htmlFor="fs">
                            <div className="flipswitch-inner"></div>
                            <div className="flipswitch-switch"></div>
                        </label>
                    </div>
                </div>
                <div className="bot-container-left-list-info">
                    {data.extendedIngredients.map((item, index) => (
                        // <li key={index}>{ingredient.original}</li>
                        <div className="bot-container-left-list-items-info" key={index}>
                            <div className="bot-list-img-info">
                                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt={item.image} />
                            </div>
                            <span className="bot-list-amount-info">
                                {/* {item.measures[system].amount} */}
                                {amount(item.measures[system].amount, item.measures[system].unitShort)}
                                &nbsp;
                                {item.measures[system].unitShort}
                            </span>
                            <span className="bot-list-name-info">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bot-container-right-info">
                <h3>How to Make</h3>
                <div className="steps-container">
                    {data.analyzedInstructions[0].steps.map((item, index) => (
                        <div key={index}>
                            <h4>Step {index + 1}</h4>
                            {/* {item.step} */}
                            <div className="steps-data">
                                {item.step}
                                <div className="ingredients-img-container">
                                    {item.ingredients.map((item, index) => (
                                        <img key={index} className="small-ingredients" src={item.image}alt={item.name}></img>

                                    ))}
                                    {item.equipment.map((item, index) => (
                                        <img key={index} className="small-ingredients" src={item.image} alt={item.name}></img>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}