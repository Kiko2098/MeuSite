import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MicroGreensV2.css';
import desktopImg1 from './Imagens/MicrogreensV3/AnaliseCustos.png';
import desktopImg2 from './Imagens/MicrogreensV3/Clientes.png';
import desktopImg3 from './Imagens/MicrogreensV3/Componentes.png';
import desktopImg4 from './Imagens/MicrogreensV3/Compras.png';
import desktopImg5 from './Imagens/MicrogreensV3/DesvioProducao.png';
import desktopImg6 from './Imagens/MicrogreensV3/Fornecedores.png';
import desktopImg7 from './Imagens/MicrogreensV3/GestaoLocalizacoes.png';
import desktopImg8 from './Imagens/MicrogreensV3/GestaoOrdensDeProducao.png';
import desktopImg9 from './Imagens/MicrogreensV3/Inventario.png';
import desktopImg10 from './Imagens/MicrogreensV3/MovimentosInventario.png';
import desktopImg11 from './Imagens/MicrogreensV3/OrdensDeProducao.png';
import desktopImg12 from './Imagens/MicrogreensV3/Planeamento.png';
import desktopImg13 from './Imagens/MicrogreensV3/Plantas.png';
import desktopImg14 from './Imagens/MicrogreensV3/ProjecaoDeNecessidades.png';
import desktopImg15 from './Imagens/MicrogreensV3/Quebras.png';
import desktopImg16 from './Imagens/MicrogreensV3/RegistoCustos.png';

import microgreensHUB from './Imagens/MicroGreensHub.png'; 

const images = [
    { src: desktopImg1, alt: "Análise de Custos" },
    { src: desktopImg2, alt: "Clientes" },
    { src: desktopImg3, alt: "Componentes" },
    { src: desktopImg4, alt: "Compras" },
    { src: desktopImg5, alt: "Desvio de Produção" },
    { src: desktopImg6, alt: "Fornecedores" },
    { src: desktopImg7, alt: "Gestão de Localizações" },
    { src: desktopImg8, alt: "Gestão de Ordens de Produção" },
    { src: desktopImg9, alt: "Inventário" },
    { src: desktopImg10, alt: "Movimentos de Inventário" },
    { src: desktopImg11, alt: "Ordens de Produção" },
    { src: desktopImg12, alt: "Planeamento" },
    { src: desktopImg13, alt: "Plantas" },
    { src: desktopImg14, alt: "Projeção de Necessidades" },
    { src: desktopImg15, alt: "Quebras" },
    { src: desktopImg16, alt: "Registo de Custos" },
];

const ImageCyclerDesktop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        console.log("Slide atual:", currentIndex); // Debug para ver se está atualizando corretamente
    }, [currentIndex]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        afterChange: (index) => setCurrentIndex(index), // Agora atualizado corretamente
    };

    return (
        <div className="microgreensv2-imagecycler">
            <div className="p-MicroGreens-DescricaoImagem">
                <p>{images[currentIndex].alt}</p>
            </div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="microgreensv2-image-item">
                        <img src={image.src} alt={image.alt} className="microgreensv2-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

function MicroGreensV3() {
  return (
    <div className="MicroGreens">
      <h1 className="h1-MicroGreens">MicroGreensHUB - V3</h1>
      
      <span className="icon-text-projetos ">
          <img src={microgreensHUB} alt="VerdesMondego" className="microgreensv2-header" />
      </span>
      <hr className="divider-MicroGreens" />      
      <h2 className="h2-MicroGreens">Nova Versão</h2>
      
      <p className="p-MicroGreens">
        A nova versão traz melhorias significativas para otimizar a experiência do utilizador. O UI foi redesenhado para oferecer uma interface mais intuitiva e eficiente. 
        Além disso, foi aprimorada o desempenho da aplicação, tornando-a mais rápida e responsiva. 
        Outra grande novidade é a integração via API com o programa de faturação KeyInvoice, permitindo uma gestão mais ágil e automatizada. 
        Com estas melhorias, a aplicação expande-se em todas as vertentes, garantindo mais flexibilidade e adaptação às necessidades dos utilizadores.
      </p> 

      <h2 className="h2-MicroGreens">Funcionalidades</h2>
  
      <h3 className="h3-MicroGreens">Sincronização via API</h3>
      <ul className="ul-MicroGreens">
        <li className="li-MicroGreens">Cria e atualiza os clientes.</li>
        <li className="li-MicroGreens">Atualiza os dados dos produtos.</li>
      </ul>

      <h3 className="h3-MicroGreens">Vendas</h3>
      <ul className="ul-MicroGreens">
        <li className="li-MicroGreens">Calendarização de entregas por cliente.</li>
      </ul>

      <h3 className="h3-MicroGreens">Compras</h3>
      <ul className="ul-MicroGreens">
        <li className="li-MicroGreens">Registo de Compras.</li>
        <li className="li-MicroGreens">Projeção de Necessidades.</li>
        <li className="li-MicroGreens">Registo de Custos.</li>
        <li className="li-MicroGreens">Análise de Custos.</li>
      </ul>

      <h3 className="h3-MicroGreens">Inventário</h3>
      <ul className="ul-MicroGreens">
        <li className="li-MicroGreens">Consulta de Inventário e Movimentos do Inventário.</li>
        <li className="li-MicroGreens">Registo de quebras de inventário.</li>
      </ul>

      <h3 className="h3-MicroGreens">Produção</h3>
      <ul className="ul-MicroGreens">
        <li className="li-MicroGreens">Planeamento de produção.</li>
        <li className="li-MicroGreens">Gestão das Ordens de Produção.</li>
        <li className="li-MicroGreens">Impressão de Etiquetas.</li>
        <li className="li-MicroGreens">Gestão de Localizações das Ordens de Produção.</li>
        <li className="li-MicroGreens">Relatório de tarefas a executar semanalmente.</li>
        <li className="li-MicroGreens">Relatório de Produção.</li>
        <li className="li-MicroGreens">Previsão de Produção.</li>
        <li className="li-MicroGreens">Desvios de Produção.</li>
      </ul>

      <h2 className="h2-MicroGreens">Desktop</h2>
      <div className="microgreensv2-imagecycler">
        <ImageCyclerDesktop />
      </div>

      <h2 className="h2-MicroGreens">Milestones</h2>      
      <ul className="ul-MicroGreensCheck">
        <li className="li-MicroGreensCheck">Novo UI.</li>
        <li className="li-MicroGreensCheck">Atualização da base de dados pela versão da aplicação.</li>
        <li className="li-MicroGreensCheck">Impressão de etiquetas para a produção e vendas.</li>
        <li className="li-MicroGreensCheck">Gestão do planeamento em um diagrama de Gantt</li>
        <li className="li-MicroGreensCheck">Gestão das localizações de produção.</li>
        <li className="li-MicroGreensUncheck">Criar documentos financeiros pela API</li>   
        <li className="li-MicroGreensUncheck">Aplicação Android</li>        
      </ul>         
      <hr className="divider-MicroGreens" /> 
    </div>
  );
}

export default MicroGreensV3;