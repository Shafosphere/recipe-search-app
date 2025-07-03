import "./styles-navbar.css";
export default function Navbar({ goToHome, goToFavorite }) {
  return (
    <div className="container-navbar">
      {/* <h1 className="left-navbar">recipe search app</h1> */}
      <div className="right-navbar">
        <div onClick={() => goToHome()} className="Home-navbar">
          recipe search app
        </div>
        <div onClick={() => goToFavorite()} className="Fav-navbar">
          Favorite
        </div>
      </div>
    </div>
  );
}
