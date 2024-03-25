import React, { useState } from 'react';
import Header from "../components/Header/Header"
import Apropos from "../components/Apropos/Apropos"
import Accroche from "../components/Accroche/Accroche"
import Skills from "../components/Skills/skills"
import Project from "../components/Project/project"
import Contact from "../components/Contact/contact"

export default function Home() {
 
    return (
         <div className="home"> 
         <Header />
         <Accroche />
         <Apropos />
         <Skills/>
         <Project/>
          <Contact  />
        </div>
    )
}