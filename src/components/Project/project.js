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
    const [flips, setFlips] = useState(projets.map(() => false));
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleFlip = (index) => {
        const newFlips = [...flips];
        newFlips[index] = !newFlips[index];
        setFlips(newFlips);
    };

    const openModal = (image) => {
        setModalImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div id="point_project">
            <div className='Project'>
                <h1 className='h1_title'>PROJECT</h1>
                <div className="loader_first">
                    <span className=" loader_one "></span>
                </div>
                <Container >
                    <Row>
                        {projets.map((item, index) => (
                            <Col sm={12} md={6} lg={4} key={index}>
                                <ReactCardFlip isFlipped={flips[index]} flipDirection="horizontal">

                                    <Card >

                                        <Card.Img variant="top" src={item.image} />


                                        <Card.Body>
                                            <Card.Title>
                                                {item.title}
                                                <div className='container_icone'>
                                                    <Button variant="link" className='plus' style={{ marginLeft: '10px' }} onClick={() => handleFlip(index)}>+</Button>
                                                    <img className='loupe loupe hover-pointer' src={logoloupe} onClick={() => openModal(item.imagedesktop)} />

                                                </div>
                                            </Card.Title>
                                            <Card.Text>
                                                {item.text}
                                            </Card.Text>
                                            <div className='button'>
                                                <Button className='button_circle' variant="primary" href={item.link1} target="_blank">GitHub</Button>
                                                <Button className='button_circle' variant="secondary" href={item.link2} target="_blank">{item.buttonText || 'Site'}</Button>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card >
                                        <Card.Body>
                                            <Card.Title> {item.title}</Card.Title>
                                            <Card.Text>
                                                {item.textflip}
                                            </Card.Text>
                                            <Button variant="link" className='plus' style={{ marginLeft: '10px' }} onClick={() => handleFlip(index)}>-</Button>
                                        </Card.Body>
                                    </Card>
                                </ReactCardFlip>
                            </Col>
                        ))}
                    </Row>
                </Container>


                <ImageModal show={showModal} handleClose={closeModal} image={modalImage} />
            </div>
        </div >
    );
}
