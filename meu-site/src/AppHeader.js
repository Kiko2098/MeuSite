import React from "react";
import './AppHeader.css';
import InicioImg from './Imagens/InicioIMG.png'; 

const projects = [
  { name: "Calculadora de pladur", status: "Em curso", progress: 20 },
  /*{ name: "GunFinder", status: "Concluído", progress: 100 },  */
  { name: "MicroGreens V2", status: "Concluído", progress: 100 },
  { name: "MicroGreens V3", status: "Em curso", progress: 60 },  
  { name: "PriceTracker", status: "Concluído", progress: 100 },
];

const ProjectTable = () => {
  return (
    <table className="inicio-table">
      <thead>
        <tr>
          <th>Projetos</th>
          <th>Estado</th>
          <th>Progresso</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td>{project.name}</td>
            <td>{project.status}</td>
            <td>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function AppHeader() {
  return (
    <header className="App-header">
      <img src={InicioImg} alt="Android" className="inicio-image" />
      
      <p className="arvo-bold-one">Bem-vindo ao meu site! 
        Aqui, podes encontrar a minha coleção de projetos pessoais e profissionais. 
        Explora as abas para descobrir mais sobre os meus projetos e o meu percurso profissional.
      </p>

      <ProjectTable />

      <p className="arvo-bold-two">Fica à vontade para entrar em contato e discutir possíveis colaborações!
      </p>
    </header>
  );
}

export default AppHeader;
