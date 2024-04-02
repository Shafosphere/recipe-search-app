import "./styles-navbar.css"
export default function Navbar({ goToHome }) {
    return (
        <div className="container-navbar">
            <h1 className="left-navbar">recipe search app</h1>
            <div className="right-navbar">
                <div onClick={() => goToHome()} className="Home-navbar">Home</div>
                <div className="Fav-navbar">Favorite</div>
            </div>
        </div>
    )
}