import React, { useState } from 'react';
import Message from '../Message/Message';

export default function Contact() {
    const [formState, setFormState] = useState({ fname: '', lname: '', email: '', message: '' });
    const [message, setMessage] = useState({ type: '', text: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formState.fname || !formState.lname || !formState.email || !formState.message) {
            setMessage({ type: 'error', text: 'Veuillez remplir  les champs email, nom, prénom.' });
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            setMessage({ type: 'error', text: 'Veuillez entrer un email valide.' });
        } else {
            const formData = new FormData(e.target);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    setIsSubmitted(true);
                    setMessage({ type: 'success', text: 'Votre message a été envoyé avec succès.' });
                })
                .catch((error) => alert(error));
        }
    };


    return (
        <div id="point_contact">
            <div className='Contact'>
                <h1 className='h1_title'>CONTACT</h1>
                <div className="loader_first">
                    <span className=" loader_one "></span>
                </div>
                <form className="formulaire" noValidate name="contact" method="POST" data-netlify="true" action="/" onSubmit={handleSubmit} >
                    <input type="hidden" name="form-name" value="contact" />

                    <label>
                        Nom :
                        <input type="text" name="fname" onChange={handleChange} />
                    </label>
                    <label>
                        Prénon :
                        <input type="text" name="lname" onChange={handleChange} />
                    </label>
                    <label>
                        E-mail :
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" onChange={handleChange} rows="5" cols="50" />
                    </label>
                    <input type="submit" value="Envoyer" className={`button_submit ${isSubmitted ? 'success' : ''}`} />
                </form>
                {message.text && <Message message={message} clearMessage={() => setMessage({ type: '', text: '' })} />}
            </div>
        </div >
    );
}
