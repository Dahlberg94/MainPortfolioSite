import { Link, useRouteError } from "react-router-dom"




export default function ProfilesError() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="profiles-error">
            <h2>Error!</h2>
            <h2>hej</h2>
            <p>{error.message}</p>

            <Link to="/profiles"> Gå tillbaka till profilerna </Link>

        </div>
    )
}