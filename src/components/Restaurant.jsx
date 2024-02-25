import "../App.css";


function Restaurant ({ img, name, description, menu }) {
    return(
        <>
            <div className="restaurant">
                <img src={img} className="restaurant-img" />
                <div className="restaurant-info">
                    <h3>{ name }</h3>
                    <h5>{ description }</h5>
                </div>
                <div className="button">
                    <a href={ menu } target="_blank" rel="noopener noreferrer">
                        <button className="menu-button"> View Menu </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Restaurant;