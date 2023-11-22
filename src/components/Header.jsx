import { Link } from "react-router-dom"

function Header( {currentPage} ) {
    return(
        <header>
            <ul>
                <li>
                    {currentPage == "HomePage" ? ( 
                        <strong><Link to="/">Accueil</Link></strong>
                    ) : (
                        <Link to="/">Accueil</Link>
                    )}
                </li>
                <li>
                    {currentPage == "CelebritiesPage" ? (
                        <strong><Link to="/celebrities">Célébrités</Link></strong>
                    ) : (
                        <Link to="/celebrities">Célébrités</Link>
                    )}
                    
                </li>
                <li>
                    {currentPage == "RandomCelebrityPage" ? (
                        <strong><Link to="/celebrities/random">Célébrité au hasard</Link></strong>
                    ) : (
                        <Link to="/celebrities/random">Célébrité au hasard</Link>
                    )}
                </li>
            </ul>
        </header>
    )
}

export default Header