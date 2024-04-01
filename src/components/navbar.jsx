import "./styles-navbar.css"
export default function Navbar() {
    return (
        <div className="container-navbar">
            <h1 className="logo"><a href="#">recipe search app</a></h1>
            <ul className="main-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Favorite</a></li>
            </ul>
        </div>
    )
}