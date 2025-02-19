import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './DryWallCalc.css';
import DWC_Inicial from './Imagens/DWC_Inicial.png'; 
import DWC_Obras from './Imagens/DWC_Obras.png'; 
import DWC_ObraSelecionada from './Imagens/DWC_ObraSelecionada.png'; 
import DWC_ObraSelecionadaDivisoes from './Imagens/DWC_ObraSelecionadaDivisoes.png';
import DWC_DivisaoSelecionada from './Imagens/DWC_DivisaoSelecionada.png';  

const ImageCycler = () => {
  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      };

  return (
    <Slider {...settings}>
        <div className="DryWallCalc-image-item">
            <img src={DWC_Inicial} alt="DWC 1" className="DryWallCalc-image" />
        </div>
        <div className="DryWallCalc-image-item">
            <img src={DWC_Obras} alt="DWC 2" className="DryWallCalc-image" />
        </div>
        <div className="DryWallCalc-image-item">
            <img src={DWC_ObraSelecionada} alt="DWC 3" className="DryWallCalc-image" />
        </div>
        <div className="DryWallCalc-image-item">
            <img src={DWC_ObraSelecionadaDivisoes} alt="DWC 4" className="DryWallCalc-image" />
        </div>
        <div className="DryWallCalc-image-item">
            <img src={DWC_DivisaoSelecionada} alt="DWC 5" className="DryWallCalc-image" />
        </div>
    </Slider>
  );
}



function DryWallCalc() {
  return (
    <div >
      <h1 className="h1-DryWallCalc">DryWallCalc</h1>
      <hr className="divider-DryWallCalc" />      
      <h2 className="h2-DryWallCalc">Introdução</h2>
      
      <p className="p-DryWallCalc">
      A aplicação tem como principal objetivo auxiliar no cálculo de materiais necessários para a execução de obras em pladur. 
      Este sistema visa oferecer uma ferramenta prática e eficiente, que permitirá estimar a quantidade de insumos como placas de gesso, perfis metálicos, parafusos, 
      massas de acabamento, entre outros, de acordo com as especificações e dimensões do projeto.
        </p> 



      <h2 className="h2-DryWallCalc">Solução</h2>
      <p className="p-DryWallCalc">
      A aplicação será desenvolvida com uma base de dados local, permitindo um armazenamento seguro e 
      eficiente das informações referentes aos diferentes projetos e cálculos de materiais. Abaixo está uma descrição detalhada das principais funcionalidades:      
      </p>
      <h3 className="h3-DryWallCalc">1. Criação de Vários Projetos</h3>
      <p className="p-DryWallCalc">
      A aplicação permite que o utilizador crie e administre múltiplos projetos simultaneamente. Cada projeto poderá ser configurado de forma independente, 
      com especificações únicas, 
      facilitando a administração de diversas obras em pladur. Isso será útil para profissionais que trabalham em vários projetos ao mesmo tempo.      
      </p>
      <h3 className="h3-DryWallCalc">2. Divisões Personalizadas em Cada Projeto</h3>
      <p className="p-DryWallCalc">
      Dentro de cada projeto, o utilizador poderá definir diferentes divisões, como salas, quartos, corredores, entre outros. Para cada divisão criada, 
      o sistema permitirá o configuração de paredes e tetos a serem construídos em pladur. 
      Dessa forma, será possível calcular de maneira segmentada os materiais necessários para cada espaço, proporcionando uma maior precisão e personalização no planeamento      
      </p>
      <h3 className="h3-DryWallCalc">3. Resumo de Materiais por Projeto</h3>
      <p className="p-DryWallCalc">
      A aplicação fornecerá, ao final do planeamento de cada projeto, um resumo detalhado dos materiais necessários. 
      Esse resumo incluirá a quantidade total de placas de gesso, perfis, parafusos e massas de acabamento.       
      </p>
      <h3 className="h3-DryWallCalc">4. Atribuição de mão de obra por metro quadrado</h3>
      <p className="p-DryWallCalc">
      O sistema calculará automaticamente a área total das divisões em metros quadrados (m²), considerando as paredes e tetos especificados. A partir desse valor, o utilizador poderá atribuir um custo por m², facilitando a obtenção de um orçamento estimado para o projeto.
       Com isso, a aplicação permitirá uma visualização rápida do custo total da obra em pladur, otimizando o processo de orçamentação.      
      </p>

      <h2 className="h2-DryWallCalc">Android</h2>
      <div className="image-cycler">
        <ImageCycler />
      </div>

      <h2 className="h2-DryWallCalc">Funcionalidades em desenvolvimento</h2>
      <p className="p-DryWallCalc">
      As funcionalidades a seguir ainda estão em desenvolvimento, porém, com as funções principais já concluídas, o processo de publicação da aplicação na Google Play já está em andamento.</p>
      <ul className="ul-DryWallCalc">
        <li className="li-DryWallCalc">Cálculo de Materiais para Tetos</li>
        <li className="li-DryWallCalc">Atribuição de Preços aos Materiais (Geral e por Projeto)</li>        
        <li className="li-DryWallCalc">Materiais por Divisão</li>
      </ul>
      
      


      <Link to="/privacy/DryWallCalc" className="button-link">
        <button className="contact-button">
          Politicas de Privacidade
        </button>
      </Link>
      

      <hr className="divider-DryWallCalc" /> 


        
        
      
       
    </div>
  );
}

export default DryWallCalc;