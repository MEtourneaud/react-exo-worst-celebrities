import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function CopyrightPage() {

    // useState permet de stocker dans une variable et lui donne par défaut la valeur "true" et l'utilisera au premier chargement du composant
    // Aux chargements suivants, il prendra la valeur stocké composant
    const [displayText, setDisplayText] = useState(true);


    const handleButtonClick  = () => (
    // Au moment de cliquer, un rechargement du composant s'effectue et modifie la valeur de displayText (true => false)
    // Un rechargement du composant s'effectue
        setDisplayText(!displayText)
    )

    return(
        <>
            <Header currentPage={"CopyrightPage"}/>
            {/* J'utilise ici la valeur displayText pour faire afficher ou non le texte */}
            {displayText && (
                <p>Bonjour !</p>
            )}
            <button onClick={handleButtonClick}>Cacher le texte</button>
            <Footer />
        </>
    )
}

export default CopyrightPage