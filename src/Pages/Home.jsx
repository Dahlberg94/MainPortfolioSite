import logo from "../Assets/mig.png"
import "../index.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home_logo">
                <div className="home_info">
                <h2>Välkommen till min profil</h2>
                <p id="shortinfo">
        Jag heter Marcus Dahlberg och är en nyexaminerad webbutvecklare med fokus på frontend-utveckling. Jag har erfarenhet av HTML, CSS, JavaScript, React och Git, och har även grundläggande kunskap inom Node.js. Mitt intresse för kodning och webbutveckling väcktes för ungefär ett år sedan, då jag bestämde mig för att prova efter många års fundering. Jag har alltid haft ett stort intresse för datorer och teknik, och arbetar idag inom IT på en fabrik, där jag ständigt utvecklar mina tekniska färdigheter.
        </p>
                </div>

            <img src={logo} alt="" className="Selfie" />
            </div>


        <p id="shortinfo">
        Just nu söker jag möjligheter att arbeta som frontendutvecklare och är även öppen för att utveckla mina kunskaper inom backend. Jag tar gärna på mig projekt och mindre uppdrag vid sidan av mitt nuvarande jobb, och är även intresserad av en heltidsanställning om möjligheten finns.
        </p>
        </div>
    )
}