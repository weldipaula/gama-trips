import React from 'react';
import logo from '../../assets/logogama.png'
import insta from '../../assets/insta.svg'
import linkedin from '../../assets/linkedin.svg'
import phone from '../../assets/phone.svg'
import { HeaderStyle } from './style'

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderStyle>
    <div className="logo">
      <h3>Gama</h3>
      <img src={logo} alt="logo gama"/>
      <h3>Trips</h3>
    </div>
    <div className="medias">
      <a href="https://api.whatsapp.com/send?phone=5541991119201">
        <img src={phone} alt="numero de telefone"/>
      </a>
      <a href="https://www.instagram.com/weldepaula/">
        <img src={insta} alt="rede social instagram"/>
      </a>
      <a href="https://www.linkedin.com/in/wellyngton-de-paula/">
        <img src={linkedin} alt="rede social linkedin"/>
      </a>
    </div>
  </HeaderStyle>
  );
}

export default Header;