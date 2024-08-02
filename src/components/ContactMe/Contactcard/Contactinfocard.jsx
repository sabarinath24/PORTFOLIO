import React from 'react';
import './Contactinfocard.css'

const Contactinfocard = ({iconUrl, text}) => {
    return (
        <div className="contact-details-card">
            <div className="icon">
                <img src={iconUrl} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Contactinfocard
