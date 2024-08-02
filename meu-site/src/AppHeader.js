import React from 'react';
import './AppHeader.css';
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
            <th>Estado</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MicroGreens</td>
            <td>Próxima atualização</td>
            <td>08/08/2024</td>
          </tr>          
          <tr>
            <td>Procura de arma</td>
            <td>Por iniciar</td>
            <td>20/08/2024</td>
          </tr>
          <tr>
            <td>Calculadora de pladur</td>
            <td>Por iniciar</td>
            <td>25/08/2024</td>
          </tr>
          <tr>
            <td>PriceTracker</td>
            <td>Concluído</td>
            <td>20/07/2024</td>
          </tr>
          
        </tbody>
      </table>


      <p className="arvo-bold-two">Fica à vontade para entrar em contato e discutir possíveis colaborações!
      </p>

      
      
    </header>
  );
}

export default AppHeader;
