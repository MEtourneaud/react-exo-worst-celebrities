import { Link } from "react-router-dom"

function Header( {currentPage} ) {
    return(
        <header>
            <ul>
                <li>
                {/* Ici je crée une props qui va me permettre de mettre en gras dans le menu, la page sur laquelle je me trouve */}
                    {currentPage === "HomePage" ? ( 
                        <strong><Link to="/">Accueil</Link></strong>
                    ) : (
                        <Link to="/">Accueil</Link>
                    )}
                </li>
                <li>
                    {currentPage === "CelebritiesPage" ? (
                        <strong><Link to="/celebrities">Célébrités</Link></strong>
                    ) : (
                        <Link to="/celebrities">Célébrités</Link>
                    )}
                    
                </li>
                <li>
                    {currentPage === "RandomCelebrityPage" ? (
                        <strong><Link to="/celebrities/random">Célébrité au hasard</Link></strong>
                    ) : (
                        <Link to="/celebrities/random">Célébrité au hasard</Link>
                    )}
                </li>
                <li>
                    {currentPage === "TvSpeakersPage" ? (
                        <strong><Link to="/tvspeakers">Présentateurs TV</Link></strong>
                    ) : (
                        <Link to="/tvspeakers">Présentateurs TV</Link>
                    )}
                </li>
            </ul>
        </header>
    )
}

export default Header