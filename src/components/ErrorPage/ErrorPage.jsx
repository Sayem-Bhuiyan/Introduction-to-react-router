import { Link, useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/')
    }
    return (
        <div>
            <h2>Oops!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back to Home</p>
                    <Link >
                        <button onClick={handleHome}>Home</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;