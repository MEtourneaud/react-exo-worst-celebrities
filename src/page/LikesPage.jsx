import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

function LikesPage() {

    // useState permet de stocker dans une variable et donner par défaut la valeur "nombre" et l'utilisera au premier chargement du composant
    // Aux chargements suivants, il prendra la valeur stocké composant
    const [likeCount, setLike] = useState(0)

    const handleLike = () => {
    // Au moment de cliquer sur le bouton, un rechargement du composant s'effectue et modifie la valeur de "likeCount"
    // Remplace la valeur par défaut "0" par le nombre de clic sur le bouton
        setLike(likeCount + 1)
    }

    return(
        <>
            <Header currentPage={"LikesPage"}/>
            {/* Ici le nombre de like (likeCount) est modifié en direct à chaque clic */}
            <button onClick={handleLike}>Like</button>
            <p>Vous avez liké {likeCount} fois !</p>
            <Footer />
        </>
    )
}

export default LikesPage