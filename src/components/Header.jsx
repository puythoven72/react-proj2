import giphyAPI from "../services/giphyUrl.js"

function Header() {


    return (
        <header className="header">

        <nav className="navbar navbar-expand-sm navbar-light ">
            <div className="container-fluid ">
                <h1><a className="navbar-brand " href="#">Giphy Search</a></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li><a className="nav-link" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    )

}

export default Header;