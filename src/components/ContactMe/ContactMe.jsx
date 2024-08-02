import React from 'react';
import './ContactMe.css';
import Contactinfocard from './Contactcard/Contactinfocard';
import mail from '../../assets/image/mail.png';
import git from './../../assets/image/github.png';
import linkedIn from './../../assets/image/linkedin.png';
import Contactform from './Contactform/Contactform';

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>
                <div className="contact-content">
                    <div style={{ flex: 1 }}>
                        <Contactinfocard
                            iconUrl={mail}
                            text="sabari240803@gmail.com"
                        />
                        <Contactinfocard
                            iconUrl={git}
                            text="https://github.com/sabarinath24"
                        />
                        <Contactinfocard
                            iconUrl={linkedIn}
                            text="https://www.linkedin.com/in/sabarinath-c-snsce"
                        />
                    </div>
                <div style={{ flex: 1 }}>
                    <Contactform/>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
