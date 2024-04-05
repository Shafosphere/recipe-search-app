import "./styles-search.css"
export default function SearchRecipe({ handleKeyPress, TypeAFoodName }) {
    return (
        <div className="container-search">
            <input
                className="input"
                type="text"
                placeholder="Pasta"
                onChange={TypeAFoodName}
                onKeyPress={handleKeyPress}
            />
            <span className="API">API from spoonacular.com</span>
        </div>
    )
}