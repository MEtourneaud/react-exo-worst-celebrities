import Footer from "../components/Footer";
import Header from "../components/Header";

function CocktailPage() {

    // Ici grâce au fetch je peux récupérer, de manière asynchrone, les données de l'API
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        // Le premier "then" permet d'attendre jusqu'à avoir récupéré les données
        .then((response) => {
            return response.json
        })
        // Une fois qu'elles sont récupérées le second "then" permet d'afficher ces données en json dans un console log
        .then((json) => {
            console.log(json);
        })

    return(
        <>
            <Header currentPage={"CocktailPage"}/>
            <p>Cocktail !!</p>
            <Footer />
        </>
    )
}

export default CocktailPage