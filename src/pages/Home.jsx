import Header from "../components/Header/Header"
import Apropos from "../components/Apropos/Apropos"
import Accroche from "../components/Accroche/Accroche"
import Skills from "../components/Skills/skills"
import Project from "../components/Project/project"


export default function Home() {

    return (
         <div className="home"> 
         <Header />
         <Accroche />
         <Apropos />
         <Skills/>
         <Project/>
        </div>
    )
}