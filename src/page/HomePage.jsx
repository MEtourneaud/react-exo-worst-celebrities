import Footer from "../components/Footer"
import Header from "../components/Header"
import { shittyStars } from "../utils/celebrity-utils";
import CelebrityCard from "../components/CelebrityCard";

function HomePage() {
      const starsSortedByDate = shittyStars.sort((star1, star2) =>{
        return new Date(star1.publishedAt) - new Date(star2.publishedAt)
      })

      const lastShittyStars = starsSortedByDate.slice(-5)

      const starsPickedByTeam = shittyStars.filter((star) => {
        return star.isPickedByTeam == true
      })

    return(
        <main>
            <Header />
            <div>
                <h2>Les 5 célébrités les récentes</h2>
                {lastShittyStars.map((star) => {
                    return(
                        <CelebrityCard starToDisplay={star}/>
                    )
                })}
            </div>
            <div>
            <h2>Les 3 célébrités choisies par la rédac</h2>
                {starsPickedByTeam.map((star) => {
                    return(
                        <CelebrityCard starToDisplay={star}/>
                    )
                })}
            </div>
            <Footer />
        </main>
    )
}

export default HomePage