import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import verdesMondegoIcon from './Imagens/VerdesMondego.png'; 
import pythonIcon from './Imagens/Python.png'; 

function Projects() {
  return (
    <div className="Projects">
      <h2 className="header2-Projects">Microgreens</h2>
      <div className="contact-item-projetos ">
      <span className="icon-text-projetos ">
          <img src={verdesMondegoIcon} alt="VerdesMondego" className="icon-projetos" />
          <span className="arvo-regular-projetos">
            <p>Verdes do Mondego</p>            
            <p>Coimbra</p>
            <p>verdesdomondego@gmail.com</p>      
          </span>
      </span>
      </div>
      <p className="descricao-Projects">
      Aplicação para gestão da produção de microvegetais, com uma versão desktop em C# e uma versão Android em Kotlin. 
      A versão em desktop funciona como backoffice, permitindo a gestão administrativa e análise de dados. 
      Já a versão Android é utilizada na parte funcional das plantações, auxiliando diretamente o controlo e monitoramento do cultivo.


      </p>
      <Link to="/projects/MicroGreens" className="button-link">
        <button className="contact-button">
          Ver mais
        </button>
      </Link>
      <hr className="divider" />    



      <h2 className="header2-Projects">Price Tracker</h2>
      <div className="contact-item-projetos ">
      <span className="icon-text-projetos ">
          <img src={pythonIcon} alt="Python" className="icon-projetos" />
      </span>
      </div>
      
      <p className="descricao-Projects">
      Aplicação Python para web scraping que rastreia preços em sites de hipermercados. 
      Ela recolhe e atualiza automaticamente os dados dos produtos numa base de dados comum, 
      permitindo comparar preços entre diferentes lojas.

      </p>
      <Link to="/projects/PriceTracker" className="button-link">
        <button className="contact-button">
          Ver mais
        </button>
      </Link>
      <hr className="divider" />

      <h2 className="header2-Projects">Procura de arma</h2>
      
      <p className="descricao-Projects">
      Aplicação desktop desenvolvida em C# que permite ao utilizador procurar um modelo de arma pelos vários sites de armeiros portugueses e mostra todos os resultados nos vários sites, 
      o display vai apresentar ao utilizador vai conseguir visualizar os preços e o link de acesso direto a página do site.

      </p>
      <hr className="divider" />


      <h2 className="header2-Projects">Calculadora de pladur</h2>
      
      <p className="descricao-Projects">
      Aplicação android que permite ao utilizador inserir as dimensões de várias paredes e tetos de um projeto de construção de forma simples 
      e são devolvidos os valores de materiais necessários. 
      É possivel ainda que sejam impressos relatórios em pdf com a lista de materiais a encomendar aos fornecedores.

      </p>
      <hr className="divider" />

      
    </div>
  );
}

export default Projects;

