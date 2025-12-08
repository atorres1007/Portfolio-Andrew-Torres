import { useState } from "react"
import emailjs from 'emailjs-com';

export default function ContactForm () {

    //EmailJS API info from .env file
    const PUBLIC_KEY = "rNeP60GtuK7NvwmWk";
    const SERVICE_ID = "service_8wjc8tq";
    const TEMPLATE_ID = "template_5ilgsz5";

    //Form Input States
    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');

    //Error Message States
    const [errorFromNameText, setErrorFromNameText] = useState('');
    const [errorFromEmailText, setErrorFromEmailText] = useState('');
    const [errorMessageText, setErrorMessageText] = useState('');

    //Error States
    const [errorFromName, setErrorFromName] = useState(true);
    const [errorFromEmail, setErrorFromEmail] = useState(true);
    const [errorMessage, setErrorMessage] = useState(true);

    const nameChange = (e) => {

        const value = e.target.value
        setFromName(value);

        if (value.trim() === '') {
            setErrorFromNameText('Please Enter a Name')
            setErrorFromName(true);
        }
        else {
            setErrorFromNameText('')
            setErrorFromName(false);
        }
    };

    const emailChange = (e) => {

        const value = e.target.value
        setFromEmail(value);

        if (value.trim() === '' || !value.includes('@') || !value.includes('.')) {
            setErrorFromEmailText('Invalid email format');
            setErrorFromEmail(true);
        } 
        else {
            setErrorFromEmailText('');
            setErrorFromEmail(false);
        }
    };

    const messageChange = (e) => {

        const value = e.target.value
        setMessage(value);

        if (value.trim() === '') {
            setErrorMessageText('Please Enter a Message')
            setErrorMessage(true);
        }
        else {
            setErrorMessageText('')
            setErrorMessage(false);
        }
    };

    const checkFields = () => {
        if (fromName.trim() === '') {
            setErrorFromNameText('Please Enter a Name')
            setErrorFromName(true)
        }
        if (fromEmail.trim() === '') {
            setErrorFromEmailText('Invalid email format')
            setErrorFromEmail(true)
        }
        if (message.trim() === '') {
            setErrorMessageText('Please Enter a Message')
            setErrorMessage(true)
        }  
    };

    //Send form info to EmailJS API
    const sendEmail = (e) => {

        e.preventDefault();

        checkFields();

        if (!errorFromName && !errorFromEmail && !errorMessage) {

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, 
            (error) => {
                console.log(error.text);
                alert('Something Went Wrong')
            })
            
            setFromName('')
            setFromEmail('')
            setMessage('')
        }
    };


    return (
        <div className="contact-form-container">
            <form onSubmit={sendEmail} className="contact-form">

                <div className="name-and-email">
                    <div className="name">
                        <input type="text" id="from_name" 
                            name="from_name" value={fromName} 
                            onChange={nameChange} 
                            placeholder="Name"
                        />
                        <span className="form-error">{errorFromNameText}</span>
                    </div>

                    <div className="email">
                        <input type='email' id="from_email" 
                        name="from_email" value={fromEmail}
                        onChange={emailChange}
                        placeholder="Email@email.com"
                        />
                        <span className="form-error">{errorFromEmailText}</span>
                    </div>

                </div>

                <div className="message">
                    <textarea name="message" placeholder="Your Message"
                    value={message} onChange={messageChange}
                    />
                    <span className="form-error">{errorMessageText}</span>
                </div>

                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}