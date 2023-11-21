import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { shittyStars } from "../utils/celebrity-utils"

function CelebrityPage() {

    const { celebrityId } = useParams ()

      const idInt = parseInt(celebrityId)
      
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