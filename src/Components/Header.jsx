import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { HashLink as Link } from 'react-router-hash-link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Container className='logo' maxWidth="xl">
         <h1>SparkFins</h1>
         <div className='phn-mail'>
         <p> <PhoneIcon className='header-icon'/>Phone: +91 90909090909 </p> {"     "   }  
         <p> <EmailIcon className='header-icon' /> Email: Loremipsum@gmail.com</p>
         </div>
      </Container>
    <nav>
      <ul
        style={{
          maxHeight: isOpen ? '300px' : '0px',
          transition: 'max-height 0.3s ease',
          zIndex: 999,
        }}
      >
        <li><p><Link to='#'>HOME</Link></p></li>
        <li><p><Link to='#about'>ABOUT US</Link></p></li>
        <li><p><Link to='#'>ACHIEVEMENTS & REWARDS</Link></p></li>
        <li><p><Link to='#whyChooseUs'>WHY CHOOSE US</Link></p></li>
        <li><p><Link to='#contact'>CONTACT US</Link></p></li>
        <li><p><Link to='#services'>SERVICES</Link></p></li>
      </ul>
      <div onClick={toggleMenu}>
        <MenuIcon   className="menu-icon"/>
      </div>
    </nav>
    </div>
  );
};

export default HamburgerMenu;
