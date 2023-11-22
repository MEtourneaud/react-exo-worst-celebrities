import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

function FormMessagePage() {

    // useState permet de stocker dans une variable et lui donne par défaut la valeur "chaîne de caractère vide" et l'utilisera au premier chargement du composant
    // Aux chargements suivants, il prendra la valeur stocké composant
    const [message, setMessage] = useState("")

    const handleMessageChange = (event) => {
    //Au moment de taper un caractère, un rechargement du composant s'effectue et modifie la valeur de "message"
    //Remplace une chaîne de caractère vide par ce qui écrit
        setMessage(event.target.value)
    }

    return(
        <>
            <Header />
            <form>
                <label>
                    Message
                    {/* Ici le texte est modifié en direct, en même temps que l'on tape le message */}
                    <input onChange={handleMessageChange}type="text" name="message" />
                </label>
                <p>Vous avez envoyé : "{message}"</p>
            </form>
            <Footer />
        </>
    )
}

export default FormMessagePage