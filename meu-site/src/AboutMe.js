import React from 'react';
import './AboutMe.css';
import mailIcon from './Imagens/mail.png';
import linkedInIcon from './Imagens/linkedin.png';   


function AboutMe() {
  return (
    <div className="AboutMe">
      <h2 className="arvo-cab">Sobre Mim</h2>
      
      <p className="arvo-regular" > O meu nome é Francisco, sou natural de Coimbra. 
      Tenho uma licenciatura em Contabilidade, embora nunca tenha exercido na área. 
      Em vez disso, segui a minha paixão pela tecnologia, o que me levou a uma carreira diferente.
      </p>

      <p className="arvo-regular" > 
      Atualmente, trabalho como técnico/consultor para um parceiro do ERP PRIMAVERA, 
      no entanto, gosto de dedicar o meu tempo livre ao desenvolvimento de software.
      </p>

      <p className="arvo-regular" >Dedico grande parte do meu tempo livre a explorar novas tecnologias 
      e a trabalhar em projetos pessoais. 
      </p>

      <p className="arvo-regular" >Estou sempre aberto a novas oportunidades e colaborações, 
      especialmente aquelas que me permitam combinar a minha experiência técnica com a minha curiosidade.
      </p>  
      <hr className="divider-MicroGreens" /> 
      
      <h2 className="arvo-bold-contacto" >Contactos</h2>
      <div className="contact-item">
        <span className="icon-text">
          <img src={mailIcon} alt="Email" className="icon" />
          <span className="arvo-regular-contacto">francisco.faustino.almeida@gmail.com</span>
        </span>
      </div>
      <div className="contact-item">
      <span className="icon-text">
        <img src={linkedInIcon} alt="LinkedIn" className="icon" />
          <span className="arvo-regular-contacto">
            <a href="https://www.linkedin.com/in/francisco-faustino-almeida" target="_blank" rel="noopener noreferrer" className="black-link">francisco-faustino-almeida</a>
          </span>
      </span>

      </div>

       
      
      
      </div>
          
  );
}

export default AboutMe;
