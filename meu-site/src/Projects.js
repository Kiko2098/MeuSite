import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import verdesMondegoIcon from './Imagens/VerdesMondego.png'; 

function Projects() {
  return (
    <div className="Projects">
      <h2 className="header2-Projects">Microgreens</h2>
      <div className="contact-item-projetos ">
      <span className="icon-text-projetos ">
          <img src={verdesMondegoIcon} alt="LinkedIn" className="icon-projetos" />
          <span className="arvo-regular-projetos">
            <p>Verdes do Mondego</p>            
            <p>Coimbra</p>
            <p>verdesdomondego@gmail.com</p>      
          </span>
      </span>
      </div>
      <p className="descricao-Projects">
      A aplicação para gestão da produção de microvegetais, com uma versão desktop em C# e uma versão Android em Kotlin. 
      A versão em desktop funciona como backoffice, permitindo a gestão administrativa e análise de dados. 
      Já a versão Android é utilizada na parte funcional das plantações, auxiliando diretamente o controlo e monitoramento do cultivo.


      </p>
      <Link to="/projects/MicroGreens" className="button-link">
        <button className="contact-button">
          Ver mais
        </button>
      </Link>
      <hr className="divider" />    

      
    </div>
  );
}

export default Projects;

