import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { shittyStars } from "../utils/celebrity-utils"

function CelebrityPage() {

    //J'utilise la fonction useParams afin d'obtenir les paramètres de l'URL.
    //Je donne à la variable le nom que j'ai utilisé comme paramètre déclaré dans la route dans App.js
    const { celebrityId } = useParams ()

    //J'utilise parseInt afin de convertir le type de id (chaine de caractères) récupéré dans l'url
    //en un integer(nombre)
    const idInt = parseInt(celebrityId)
    
    //Je stocke dans une variable l'id de l'url qui correspond à l'id de l'élément du tableau
    const starToDisplay = shittyStars.find((star) => {
    return star.id === idInt
    })

    return(
        <>
            <Header />
            <div>
                {starToDisplay ? (
                    <article>
                        <h2>Détail de la célébrité</h2>
                        <h3>{starToDisplay.name}</h3>
                        <p>{starToDisplay.bio}</p>
                        <img src={starToDisplay.img} alt={starToDisplay.name} />
                    </article>
                ) : (
                    <p>ERREUR 404 ! Tu fais n'imp !</p>
                )}
            </div>
            <Footer />
        </>
    )
}

export default CelebrityPage