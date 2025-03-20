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
            <nav className="navbar navbar-expand-lg bg-secondary-subtle">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">HA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/project-predictor">
                                Project Predictor
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link  className="nav-link" to="/add">
                            Add Sock
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <div className="nav-link">Hartapolis Inc.</div>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Authenticate
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={logsOut}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                    {/* <Search setData={setData} /> */}
                </div>
                </div>
            </nav>
        </>
    );
};