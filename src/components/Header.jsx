import "../App.css";
import restaurantTransparent from '../assets/images/restaurant-transparent.png';


function Header () {
    return(
        <>
        <div className="restaurant-header">
            <img src={restaurantTransparent} className="restaurant-logo" alt="restaurant" id="restaurant" />
            <h1 className="header-text">Harvard Square Eats</h1>
        </div>
        </>
    );
}

export default Header;