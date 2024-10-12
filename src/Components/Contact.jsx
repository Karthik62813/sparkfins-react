import React from 'react';
import Card from 'react-bootstrap/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { HashLink as Link } from 'react-router-hash-link';

function Contact(){
    return(
        <div className='contact' id='contact'>
            <div className="heading">
                <label>Contact Us</label>
                <b style={{color: "#2C2C6D"}}>___</b>
            </div>
            <div className='contact-cards'>


                <div className="getInTouch" >
                    <form action="index.html" autocomplete="off">
                        <h3 class="title">Get in Touch</h3>
                        <div class="input-container">
                            <input type="text" name="name" class="input" />
                            <label for="">Username</label>
                            <span>Username</span>
                        </div>
                        <div class="input-container">
                            <input type="email" name="email" class="input" />
                            <label for="">Email</label>
                            <span>Email</span>
                        </div>
                        <div class="input-container">
                            <input type="tel" name="phone" class="input" />
                            <label for="">Phone</label>
                            <span>Phone</span>
                        </div>
                        <div class="input-container textarea">
                            <textarea name="message" class="input"></textarea>
                            <label for="">Message</label>
                            <span>Message</span>
                        </div>
                        <Link to='#contact'><button>Submit</button></Link>
                    </form>
                </div>

                <div className="contact-info" style={{padding: "2.5%"}}>
                    <h3 className='title' style={{ marginBottom: "6%"}}>Contact Information</h3>
                    <div style={{ display: "flex", margin: "0 0 2% 2%"}}><PhoneIcon className='contact-icon'/> <p>+91 9951500768 / +91 8803928809</p></div>  
                    <div style={{ display: "flex", margin: "0 0 2% 2%"}}><EmailIcon className='contact-icon' /><p>sparkfins92@gmail.com / sales@sparkfins.com</p></div>
                    <div style={{ display: "flex", margin: "0 0 2% 2%"}}><LocationOnIcon className='contact-icon' /><p>50-81-29/4 Main Road Seethammapeta, Near Hotel Swagath Grand, Visakhapatnam - 530016</p></div>
                </div>
            </div>
        </div>
    );
}

export default Contact