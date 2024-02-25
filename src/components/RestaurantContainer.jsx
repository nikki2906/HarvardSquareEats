import "../App.css";
import Restaurant from "./Restaurant";
import data from '../assets/data';

function RestaurantContainter() {
    return(
        <>
            <div className="restaurant-container">
                {data.map((location) => (
                    <Restaurant
                        img={location.img}
                        name={location.name}
                        // need to have this key
					    key={location.name}
                        description={location.description}
                        menu={location.menu}
                    />
                ))}
            </div>
        </>
    );
}

export default RestaurantContainter;