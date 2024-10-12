import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faInstagram, faLinkedinIn, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div>
            <div className='footer'>
                <div className='footer-logo' maxWidth="xl">
                    <h1>SparkFins</h1>
                    <p>Powering your financial security with comprehensive insurance and investment solutions.  </p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <ul>
                        <li><PhoneIcon className='footer-icon'/>+91 99515 00768</li>
                        <li><PhoneIcon className='footer-icon'/>+91 88039 28809</li>
                        <li><EmailIcon className='footer-icon'/>sparkfins92@gmail.com</li>
                        <li><EmailIcon className='footer-icon'/>sales@sparkfins.com</li>
                        <li style={{display: "flex", alignItems: "center", paddingBottom: "4%"}}><LocationOnIcon className='footer-icon'/>50-81-29/4 Main Road Seethammapeta,
                        Near Hotel Swagath Grand, Visakhapatnam - 530016</li>
                    </ul>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <section>
                        <FontAwesomeIcon icon={faFacebookSquare} className='follow-icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='follow-icon'/>
                        <FontAwesomeIcon icon={faLinkedinIn} className='follow-icon'/>
                        <FontAwesomeIcon icon={faInstagram} className='follow-icon'/>
                        <FontAwesomeIcon icon={faGoogle} className='follow-icon'/>
                        <FontAwesomeIcon icon={faYoutube} className='follow-icon'/>
                    </section>
                </div>
            </div>
            <div className='copy-right'>
                <b>© 2024 Sparkfins. All Rights Reserved.</b>
            </div>
            <div style={{ height: "5vh", backgroundColor: "#2C2C6D"}}></div>
        </div>
    );
}

export default Footer