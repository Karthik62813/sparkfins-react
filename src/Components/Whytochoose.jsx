import React from "react";
import Card from 'react-bootstrap/Card';
import bank from '../images/bank.png'
import correct from '../images/correct.png';
import cap from '../images/cap.png';
import user from '../images/user.png';

function Whytochoose(){
    return(
        <div>
            <div className="heading">
                    <label>Why To Choose?</label>
                    <b style={{color: "#2C2C6D"}}>___</b>
            </div>
            <div className="whyToChoose">
                <Card className="choose-card" >
                <Card.Body style={{width: '85%'}}>
                    <img src={bank} alt="" />
                    <Card.Title>Comprehensive Financial Solutions</Card.Title>
                    <Card.Text>
                    <small>From insurance to investments, we provide an all-in-one solution for your financial needs.</small>
                    </Card.Text>
                </Card.Body>
                </Card>

                <Card className="choose-card" >
                <Card.Body style={{width: '85%'}}>
                    <img src={cap} alt="" />
                    <Card.Title>Expert Guidance</Card.Title>
                    <Card.Text>
                    <small>Benefit from our team of experienced professionals who help you make informed decisions.</small>
                    </Card.Text>
                </Card.Body>
                </Card>

                <Card className="choose-card" >
                <Card.Body style={{width: '85%'}}>
                    <img src={user} alt="" />
                    <Card.Title>Customer-Centric Approach</Card.Title>
                    <Card.Text>
                    <small>We prioritize understanding your specific financial goals and tailor our services accordingly.</small>
                    </Card.Text>
                </Card.Body>
                </Card>
                
                <Card className="choose-card" >
                <Card.Body style={{width: '85%'}}>
                    <img src={correct} alt="" />
                    <Card.Title>Trusted by Thousands</Card.Title>
                    <Card.Text>
                    <small>With years of industry experience, Sparkfins has become a trusted partner for many individuals and businesses.</small>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Whytochoose;