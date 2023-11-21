import Footer from "../components/Footer";
import Header from "../components/Header";
import { shittyStars } from "../utils/celebrity-utils";

function RandomCelebrityPage() {
    const randomStarsIndex = parseInt((Math.random() * (shittyStars.length - 1)).toFixed(0))

    const randomStar = shittyStars[randomStarsIndex]

    return(
        <>
            <Header />
            <h2>Célébrité choisi au hasard</h2>
            <article>
                <h3>{randomStar.name}</h3>
                <p>{randomStar.bio}</p>
                <img src={randomStar.img} alt={randomStar.name} />
            </article>
            <Footer />
        </>
    )
}

export default RandomCelebrityPage