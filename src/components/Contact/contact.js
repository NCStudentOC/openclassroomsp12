import React, { useState } from 'react';
import Message from '../Message/Message';



export default function Contact() {
    const [formState, setFormState] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };


    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.fname === '' || formState.lname === '' || formState.email === '') {
            setMessage({ type: 'error', text: 'Le prénom, le nom et l\'e-mail sont obligatoires' });
        } else if (formState.email !== '' && !validateEmail(formState.email)) {
            setMessage({ type: 'error', text: 'Veuillez entrer une adresse e-mail valide' });
        } else {
            console.log(formState);
            // Si le formulaire est soumis avec succès, définissez le message de succès
            setMessage({ type: 'success', text: 'Le message a été envoyé avec succès !' });

            setFormState({
                fname: '',
                lname: '',
                email: '',
                message: ''
            });
            setIsSubmitted(true);
        }
    };



    return (
        <div id="point_contact">
            <div className='Contact'>
                <h1 className='h1_title'>CONTACT</h1>
                <div className="loader_first">
                    <span className=" loader_one "></span>
                </div>
                <form onSubmit={handleSubmit} className='formulaire' noValidate netlify="true">
                    <label>
                        Prénom :
                        <input type="text" name="fname" value={formState.fname} onChange={handleChange} />
                    </label>
                    <label>
                        Nom :
                        <input type="text" name="lname" value={formState.lname} onChange={handleChange} />
                    </label>
                    <label>
                        E-mail :
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formState.message} onChange={handleChange} rows="5" cols="50" />
                    </label>
                    <input type="submit" value="Envoyer" className={`button_submit ${isSubmitted ? 'success' : ''}`} />
                </form>
                {message.text && <Message message={message} clearMessage={() => setMessage({ type: '', text: '' })} />}
            </div>
        </div >
    );
}
