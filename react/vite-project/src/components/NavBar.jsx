import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";

export default function NavBar () {
//logout button reloads page which effectively logs out
const logsOut = () => {
    window.location.reload();
};
//

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg bg-secondary-subtle"> */}


            <nav className="navbar navbar-expand-lg bg-secondary-subtle">    
                <div className="container-fluid">
                <a className="navbar-brand" href="/">HARTAPOLIS INC.</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                    <ul className="navbar-nav ms-auto w-100 d-flex justify-content-between">
                        <li className="nav-item">
                            <Link className="nav-link btn btn-lg btn-outline-primary" to="/">
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-lg btn-outline-primary" to="/project-predictor">
                                Project Predictor
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-lg btn-outline-primary" to="/login">
                                Authenticate
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-lg btn-outline-primary" to="/login" onClick={logsOut}>
                                Logout
                            </Link>
                        </li>
                    </ul>
            
                </div>
                </div>
            </nav>
        </>
    );
};