import Footer from "../components/Footer";
import Header from "../components/Header";
import { shittyStars } from "../utils/celebrity-utils";

function RandomCelebrityPage() {
    const randomStarsIndex = shittyStars[(Math.random() * (shittyStars.length - 1)).toFixed(0)]

    //const randomStarsIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0)
    // const randomStar = shittyStars[randomStarsIndex]

    return(
        <>
            {/* Je fais appel à la props avec son paramètre currentPage pour me permettre d'afficher en gras "Célébrité au hasard" du menu quand je suis sur cette page */}
            <Header currentPage={"RandomCelebrityPage"}/>
            <h2>Célébrité choisi au hasard</h2>
            <article>
                <h3>{randomStarsIndex.name}</h3>
                <p>{randomStarsIndex.bio}</p>
                <img src={randomStarsIndex.img} alt={randomStarsIndex.name} />
            </article>
            <Footer />
        </>
    )
}

export default RandomCelebrityPage