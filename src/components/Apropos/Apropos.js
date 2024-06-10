import Photo from '../../assets/photoabout.webp'
import cv from '../../assets/cv.svg'
import linkedin from '../../assets/linkedin.svg'
export default function Apropos() {


    return (
        <section id="point_apropos">

            <div className='apropos'>
                <>
                    <h2 className='h2_title'>ABOUT</h2>
                    <div className="loader_first">
                        <span className=" loader_one "></span>
                    </div>
                </>

                <div className="image-wrapper">
                    <img src={Photo} alt="photo de ligne de code" className='Photo_About'></img>
                    <div className="circle">  &lt;/&gt;</div>
                </div>
                <p className='p_about'>
                    Infographiste indépendant depuis 2001, exerçant en Normandie dans la région caennaise, et voulant me lancer un nouveau défit professionnel, je me suis reconverti en tant que <span className='weight'>Développeur Frontend.</span><br /><br />

                    J’ai suivi la formation certifiante :<span className='weight'> Intégrateur Web niveau Bac +2 d’Openclassrooms</span> durant laquelle j’ai appris et acquis de solides compétences en HTML, CSS, Sass, Javascript, Redux et React.<br /><br />
                    Au cours de ces mois, j’ai réalisé une multitude de projets diversifiés afin de me confronter à différentes situations allant de petites applications web de base à des systèmes beaucoup plus complexes.
                    En tant que développeur, je m’attache particulièrement à l’efficacité et la qualité du code, tout en restant en alerte des nouveautés par une veille technique.<br />
                </p>


                <div className="logo-container">
                    <a href="/cv.pdf " target="_blank" rel="noopener noreferrer">
                        <img src={cv} alt="Logo pour télécharger le fichier" />
                    </a>
                    <a href="https://fr.linkedin.com/in/nicolas-chevalier-developpeur-web" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="Logo pour la page LinkedIn" />
                    </a>
                </div>

            </div>
        </section>

    )
}