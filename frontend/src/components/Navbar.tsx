import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <h1 style={{marginTop: '0.5rem'}}><Link to="/" className="text-white no-underline hover:text-[#00ff99]" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <img src="/src/assets/favicon.ico" style={{ height: '37px', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    Kyojin AI
                    </Link>
                </h1>
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>

                    <li className="dropdown">
                        <a className="dropbtn">Tools ▾</a>
                        <div className="dropdown-content">
                            <Link to="/rag">DocChat</Link>
                            <Link to="/analysis">Analysis</Link>
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