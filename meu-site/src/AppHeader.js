import React from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css';
import mailIcon from './Imagens/mail.png'; 
import InicioImg from './Imagens/InicioImg.jpeg'; 



function AppHeader() {
  return (
    <header className="App-header">

      <img src={InicioImg} alt="Android" className="inicio-image" />
      
      <p className="arvo-bold-one">Bem-vindo ao meu site! 
        Aqui, podes encontrar a minha coleção de projetos pessoais e profissionais. 
        Explora as abas para descobrir mais sobre os meus projetos e o meu percurso profissional.
      </p>

      <table className="inicio-table">
        <thead>
          <tr>
            <th>Projetos</th>
            <th>Proxima Atualização</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MicroGreens</td>
            <td>30/02/2024</td>
            <td><Link to="/projects/MicroGreens">Ver mais</Link></td>
          </tr>
          <tr>
            <td>PriceTracker</td>
            <td>Concluído</td>
            <td><Link to="/projects/PriceTracker">Ver mais</Link></td>
          </tr>
          
        </tbody>
      </table>


      <p className="arvo-bold-two">Fica à vontade para entrar em contato e discutir possíveis colaborações!
      </p>

      <div className="contact-item">
        <span className="icon-text">
          <img src={mailIcon} alt="Email" className="icon" />
          <span className="arvo-regular-contacto">contacto@franciscoalmeida.pt</span>
        </span>
      </div>
      <div className="contact-item"></div>
    </header>
  );
}

export default AppHeader;
