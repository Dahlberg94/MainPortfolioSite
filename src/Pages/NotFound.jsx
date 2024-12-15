import { Link } from "react-router-dom";
import "../index.css"

const NotFound = () => {
    return (
        <div className="NotFound">
            <h2>404 error - Vi kunde inte hitta sidan</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius aliquam itaque maiores, totam provident aliquid iste cupiditate harum aperiam ea asperiores quae autem. Fugit eum voluptas dignissimos. Repellat, ipsa.
            </p>
            <p>
                gå till <Link to="/">Hemsidan</Link>
            </p>

        </div>
    )
}

export default NotFound