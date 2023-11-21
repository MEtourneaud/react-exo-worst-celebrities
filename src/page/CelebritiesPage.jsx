import Footer from "../components/Footer"
import Header from "../components/Header"
import { shittyStars } from "../utils/celebrity-utils";
import CelebrityCard from "../components/CelebrityCard";

function CelebritiesPage() {
    return(
        <>
            <Header />
            <h2>Toutes les pires célébrités</h2>
            <article>
            {shittyStars.map((star) => {
                    return(
                     //Ici je fais appel à mon composant CelebrityCard pour utiliser la props qui affichera les infos stockés dans cette même props 
                        <CelebrityCard starToDisplay={star}/>
                    )
                })}
            </article>
            <Footer />
        </>
    )
}

export default CelebritiesPage