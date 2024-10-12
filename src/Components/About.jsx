import React from 'react';
import Card from 'react-bootstrap/Card';

function About(){
    return(
        <div className='about' id='about'>
            <div className="heading">
                <label>About Us</label>
                <b style={{color: "#2C2C6D"}}>___</b>
            </div>
            <small className='abt-txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum at dignissimos in asperiores nemo, error veniam optio iusto ab esse minus libero adipisci dolor exercitationem saepe? Repudiandae inventore voluptatum similique ipsum perferendis fuga qui veritatis libero, quo nemo dolore beatae accusantium! Aut doloremque dolorem perspiciatis eius? Obcaec!</small>
            <small className='abt-txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum at dignissimos in asperiores nemo, error veniam optio iusto ab esse minus libero adipisci dolor exercitationem saepe? Repudiandae inventore voluptatum similique ipsum perfer!</small>
            <small className='abt-txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum at dignissimos in asperiores nemo, error veniam optio iusto ab esse minus libero adipisci dolor exercitationem saepe? Repudiandae inventore voluptatum similique ipsum perferendis fuga qui veritatis libero, quo nemo dolore beatae accusantium! Aut doloremque dolorem perspiciatis eius? Obcaec!</small>
            <Card >
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/businessman-posing-cafe_1157-45695.jpg?t=st=1728635496~exp=1728639096~hmac=f6d09660b27ba26904d1f6cf30faeb4a0750a439fc70f10e3aba262c107feba0&w=740" />
            <Card.Body>
                <Card.Title><small>Ippili Kumar</small></Card.Title>
                <Card.Text>
                <small>Founder & CEO(Sep 2019 - Dec 2023)</small>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default About