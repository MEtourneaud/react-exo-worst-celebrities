import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/celebrities">Célébrités</Link></li>
                <li><Link to="/celebrities/random">Célébrité au hasard</Link></li>
            </ul>
        </header>
    )
}

export default Header