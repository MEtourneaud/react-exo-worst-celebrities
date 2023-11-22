import Footer from "../components/Footer"
import Header from "../components/Header"
import SpeakerCard from "../components/SpeakerCard"

function TvSpeakersPage() {

    const shittySpeakers = [
        "Jean-Luc Reichmann", "Laurent Ruquier", "Arthur", "Cyril Hanouna", "Patrick Sebastien", "Jean-Marc Morandini"
    ]

    return(
        <>
            <Header currentPage={"TvSpeakersPage"}/>
            <div>
                {shittySpeakers.map((speaker) => {
                    return(
                        <SpeakerCard speakerName={speaker}/>
                    )
                })}
            </div>
            <Footer />
        </>
    )
}

export default TvSpeakersPage