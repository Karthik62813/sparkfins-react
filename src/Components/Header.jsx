import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

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
          <p><PhoneIcon className='header-icon'/> Phone: +91 90909090909 </p> {"     "   }  
          <p><EmailIcon className='header-icon' /> Email: Loremipsum@gmail.com</p>
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
        <li><a href="#">HOME</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">ACHIEVEMENTS & REWARDS</a></li>
        <li><a href="#">WHY CHOOSE US</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
      <div onClick={toggleMenu}>
        <MenuIcon   className="menu-icon"/>
      </div>
    </nav>
    </div>
  );
};

export default HamburgerMenu;
