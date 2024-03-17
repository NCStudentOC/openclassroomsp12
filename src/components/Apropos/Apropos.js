import Photo from '../../assets/photoabout.webp'

export default function Apropos() {


    return (
        <div id="point_apropos">

            <div className='apropos'>
                <>
                    <h1 className='h1_title'>ABOUT</h1>
                    <div className="loader_first">
                        <span className=" loader_one "></span>
                    </div>
                </>
                <p className='p_about'>
                    <div className="image-wrapper">
                        <img src={Photo} alt="photo de ligne de code" className='Photo_About'></img>
                        <div className="circle">  &lt;/&gt;</div>
                    </div>
                    Infographiste indépendant depuis 2001, voulant me lancer un nouveau défit professionnel, je me suis reconverti en tant que Développeur Frontend.<br /><br />

                    J’ai suivi la formation certifiante : Intégrateur Web niveau Bac +2 d’Openclassrooms durant laquelle j’ai appris et acquis de solides compétences en HTML, CSS, Javascript et React.<br /><br />
                    Au cours de ces mois, j’ai réalisé une multitude de projets diversifiés afin de me confronter à différentes situations allant de petites applications web de base à des systèmes beaucoup plus complexes.
                    En tant que développeur, je m’attache particulièrement à l’efficacité et la qualité du code, tout en restant en alerte des nouveautés par une veille technique.<br />
                </p>
            </div>
        </div>

    )
}