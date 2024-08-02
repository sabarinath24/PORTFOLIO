import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import phoneImg from './../../../assets/image/phone-call.png';
import Contactinfocard from '../Contactcard/Contactinfocard';
import './Contactform.css';

const Contactform = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_1r9qjh5',
            'template_5e4ts1i', 
            {
                from_name: `${formData.firstname} ${formData.lastname}`,
                message: formData.message,
                reply_to: formData.email,
            },
            '9Dw5rCzoNn9Cl4qM1'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, (err) => {
            console.log('FAILED...', err);
            alert('Failed to send message, please try again later.');
        });

        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='contact-form-content'>
            <form onSubmit={handleSubmit}>
                <div className='name-container'>
                    <input 
                        type="text" 
                        name='firstname' 
                        placeholder='First Name'
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="text" 
                        name='lastname' 
                        placeholder='Last Name'
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input 
                    type="email" 
                    name='email' 
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea 
                    name='message' 
                    placeholder='Message' 
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>SEND</button>
            </form>
            <div className='phone'>
                <Contactinfocard
                    iconUrl={phoneImg}
                    text="9791603637"
                />
            </div>
        </div>
    );
};

export default Contactform;
