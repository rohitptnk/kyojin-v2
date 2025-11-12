function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <h1>
                    <img src="/src/assets/favicon.ico" style={{ height: '37px', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    Kyojin AI
                </h1>
                <ul className="navbar-menu">
                    <li><a>Home</a></li>

                    <li className="dropdown">
                        <a className="dropbtn">Services ▾</a>
                        <div className="dropdown-content">
                            <a>DocChat</a>
                            <a>Analysis</a>
                            <a>PaperQuery</a>
                            <a>ResearchPilot</a>
                            <a>Coding Assistant</a>
                        </div>
                    </li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;