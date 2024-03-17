// ImageModal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ImageModal({ show, handleClose, image }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <img src={image} alt="Project" style={{ width: '100%' }} />
            </Modal.Body>
        </Modal>
    );
}
