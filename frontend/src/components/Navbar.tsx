import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <h1>
                    <img src="/src/assets/favicon.ico" style={{ height: '37px', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    Kyojin AI
                </h1>
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>

                    <li className="dropdown">
                        <a className="dropbtn">Tools ▾</a>
                        <div className="dropdown-content">
                            <a href="#">DocChat</a>
                            <a href="#">Analysis</a>
                            <a href="#">PaperQuery</a>
                            <a href="#">ResearchPilot</a>
                            <a href="#">Coding Assistant</a>
                        </div>
                    </li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;