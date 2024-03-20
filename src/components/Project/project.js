import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import projets from '../../data/projets.json';
import ReactCardFlip from 'react-card-flip';
// import logoloupe from '../../assets/loupe.svg';
import ImageModal from '../modal/Modal';
import fleche from '../../assets/arrow-right-solid.svg';
import flecheretour from '../../assets/arrow-left-solid.svg'
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

                                        <Card.Img className="survol" variant="top" src={item.image} onClick={() => openModal(item.imagedesktop)} />


                                        <Card.Body>
                                            <Card.Title>
                                                <div className='title-container'>
                                                    {item.title}
                                                    <Button variant="link" className='arrow_right' style={{ marginLeft: '10px' }} onClick={() => handleFlip(index)}>
                                                        <img src={fleche} alt="Flip card" />
                                                    </Button>
                                                </div>
                                            </Card.Title>
                                            <Card.Text>
                                                {item.text}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                    <Card >
                                        <Card.Body>
                                            <Card.Title>
                                                <div className='title-container'>
                                                    {item.title}
                                                    <Button variant="link" className='arrow_left' style={{ marginLeft: '10px' }} onClick={() => handleFlip(index)}>
                                                        <img src={flecheretour} alt="Flip card" />
                                                    </Button>
                                                </div>
                                            </Card.Title>
                                            <Card.Text>
                                                {item.textflip}
                                            </Card.Text>
                                            <div className='button'>
                                                <Button className='button_circle' variant="primary" href={item.link1} target="_blank">GitHub</Button>
                                                <Button className='button_circle' variant="secondary" href={item.link2} target="_blank">{item.buttonText || 'Site'}</Button>

                                            </div>

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
