import React from 'react';
import logiciels from '../../data/logiciels.json'
import langages from '../../data/langages.json'

import CircleCard from './CircleCard';


export default function Skills() {

    return (
        <section id="point_skills">
            <div className='Skills'>
                <h2 className='h2_title'>SKILLS</h2>
                <div className="loader_first">
                    <span className=" loader_one "></span>
                </div>
                <div className="round">

                    <div className="container_logiciels">
                        <h3 className='h3_title'>LOGICIELS</h3>
                        <div className="container_round ">
                            {logiciels.map((logiciel) => (
                                <CircleCard key={logiciel.id} image={logiciel.image} titre={logiciel.titre} details={logiciel.details} />
                            ))}
                        </div>
                    </div>

                    <div className="container_langages">
                        <h3 className='h3_title'>LANGAGES / BIBLIOTHEQUES</h3>
                        <div className="container_round">
                            {langages.map((langage) => (
                                <CircleCard key={langage.id} image={langage.image} titre={langage.titre} details={langage.details} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
