import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import projets from '../../data/projets.json';
import ReactCardFlip from 'react-card-flip';
import logoloupe from '../../assets/loupe.svg'
import ImageModal from '../modal/Modal'

export default function Project() {

    return (
        <div id="point_contact">
            <div className='Contact'>
                <h1 className='h1_title'>CONTACT</h1>
                <div className="loader_second">
                    <span className=" loader_one "></span>
                </div>
            </div>
        </div >
    );
}
