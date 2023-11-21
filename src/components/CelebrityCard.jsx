import { Link } from "react-router-dom"

//Je crée une props CelebrityCard afin de pouvoir y stocker les infos d'une célébrité à afficher à chaque fois que je fais appel à cette fonction
//Cela permet d'avoir un code moins fourni et d'éviter les répétitions
function CelebrityCard({starToDisplay}) {
    return(
        <>
            <article>
                <h3>{starToDisplay.name}</h3>
                <Link to={`/celebrities/${starToDisplay.id}`}>
                    <img src={starToDisplay.img} alt={starToDisplay.name} />
                </Link>
            </article>
        </>
    )
}

export default CelebrityCard