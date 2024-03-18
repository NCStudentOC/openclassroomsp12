import react, { useEffect } from 'react';


export default function Message({ message, clearMessage }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            clearMessage();
        }, 3000);
        return () => clearTimeout(timer);
    }, [clearMessage]);

    return (
        <div className={`message ${message.type}`}>
            {message.text}
        </div>
    );
}