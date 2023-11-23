import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

function LikesPage() {

    // useState permet de stocker dans une variable et donner par défaut la valeur "nombre" et l'utilisera au premier chargement du composant
    // Aux chargements suivants, il prendra la valeur stocké composant
    const [likeCount, setLike] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)

    const handleLike = () => {
        if (likeCount < 5) {
        // Au moment de cliquer sur le bouton, un rechargement du composant s'effectue et modifie la valeur de "likeCount"
        // Remplace la valeur par défaut "0" par le nombre de clic sur le bouton
        setLike(likeCount + 1)
        } else {
        // Arrivé à (likeCount < 5) je fais passer setDisplayMessage à "true" et je réinitialise setLike à "0"
            setDisplayMessage(true)
            // setLike(0)
        }
    }

    const handleCloseMessage= () => {
    // Ici, tant que je n'appelle pas ma fonction setDisplayMessage reste à "false" pour ne rien afficher
        setDisplayMessage(false)
        setLike(0)
    }

    return(
        <>
            <Header currentPage={"LikesPage"}/>
            {/* Après 5 likes j'utilise ma fonction handleCloseMessage pour passer setDisplayMessage à "true" et afficher le contenu voulu  */}
            {displayMessage && (
                <div>
                    <button onClick={handleCloseMessage}>Fermer</button>
                    <p>Vous ne pouvez pas liker plus</p>
                </div>
            )}
            {/* Ici le nombre de like (likeCount) est modifié en direct à chaque clic */}
            <button onClick={handleLike}>Like</button>
            <p>Vous avez liké {likeCount} fois !</p>
            {likeCount === 5 && (
                <p>Vote Hamid !</p>
            )}
            <Footer />
        </>
    )
}

export default LikesPage