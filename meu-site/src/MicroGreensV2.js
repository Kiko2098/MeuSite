import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MicroGreensV2.css';
import desktopImg1 from './Imagens/Desktop1.png'; 
import desktopImg2 from './Imagens/Desktop2.png'; 
import desktopImg3 from './Imagens/Desktop3.png'; 
import androidImg1 from './Imagens/Android1.png';
import androidImg2 from './Imagens/Android2.png';  

const ImageCyclerDesktop = () => {
  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true,      
  };

  return (
    <Slider {...settings} >
        <div className="microgreensv2-image-item">
            <img src={desktopImg1} alt="Desktop 1" className="microgreensv2-image" />
        </div>
        <div className="microgreensv2-image-item">
            <img src={desktopImg2} alt="Desktop 2" className="microgreensv2-image" />
        </div>
        <div className="microgreensv2-image-item">
            <img src={desktopImg3} alt="Desktop 3" className="microgreensv2-image" />
        </div>
    </Slider>
  );
}


const ImageCyclerAndroid = () => {
  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} >
        <div className="microgreensv2-imageitem"> 
            <img src={androidImg1} alt="Android 1" className="microgreensv2-image" />
        </div>
        <div className="microgreensv2-imageitem">
            <img src={androidImg2} alt="Android 2" className="microgreensv2-image" />
        </div>        
    </Slider>
  );
}

function MicroGreensV2() {
  return (
    <div className="MicroGreens">
      <h1 className="h1-MicroGreens">MicroGreensHUB - V2</h1>
      <hr className="divider-MicroGreens" />      
      <h2 className="h2-MicroGreens">Introdução</h2>
      
      <p className="p-MicroGreens">
        A produção e venda de vasos de microvegetais vivos são o foco da empresa, que atualmente conta com um colaborador. 
        A principal missão é fornecer um produto de valor acrescentado, de qualidade, de base sustentável e de fácil manutenção. 
        No entanto, gerir a produção de microvegetais pode ser desafiador sem as ferramentas adequadas. 
        Este estudo de caso descreve o desenvolvimento de uma aplicação para melhorar a gestão desta produção, 
        composta por uma versão desktop em C# e uma versão Android em Kotlin.
      </p> 

      <h2 className="h2-MicroGreens">Desafios</h2>
      <p className="p-MicroGreens">
        Para uma empresa de produção, é essencial ter controlo total e um rastreio preciso de todas as etapas do processo. 
        O objetivo é centralizar todas as informações da produção em um único sistema permitindo reduzir desperdícios, 
        produzindo exatamente as quantidades necessárias, evitando desvios na produção. Dessa forma, garante-se a entrega de um produto de alta qualidade, 
        produzido de maneira eficiente.
      </p>

      <h2 className="h2-MicroGreens">Solução</h2>
      <p className="p-MicroGreens">
        Foi desenvolvida uma aplicação de gestão com versões desktop (C#) e Android (Kotlin) para 
        centralizar e registrar todos os dados sobre cada uma das ordens de produção numa base de dados local.
      </p>

      <h4 className="h4-MicroGreens">Desktop</h4>
      <div className="microgreensv2-imagecycler">
        <ImageCyclerDesktop />
      </div>

      <h4 className="h4-MicroGreens">Android</h4>
      <div className="microgreensv2-imagecycler">
        <ImageCyclerAndroid />
      </div>

      <h2 className="h2-MicroGreens">Implementação</h2>
      <p className="p-MicroGreens">
        Adotámos uma abordagem de desenvolvimento ágil, utilizando sprints e 
        feedback contínuo até alcançar um produto sólido e funcional.
      </p>

      <h2 className="h2-MicroGreens">Resultados</h2>
      <p className="p-MicroGreens">
        A aplicação proporcionou um maior controlo sobre todas as tarefas, 
        permitindo que as decisões sejam tomadas com mais informação e com isso reduzir o desperdício de produção. Além disso, existem benefícios específicos, 
        como a diminuição do tempo gasto na verificação de tarefas, o rastreamento completo da produção e a identificação de áreas para melhoria contínua.
      </p>

      <h2 className="h2-MicroGreens">FeedBack</h2>

      <h4 className="h4-MicroGreens">Primeiras Impressões e Impacto da Solução nas Operações Diárias </h4>
      <p className="p-feedback-MicroGreens">
        “As primeiras impressões sobre a solução desenvolvida foram extremamente positivas. Eu achei a aplicação muito fácil de usar, 
        o que facilitou o controle das tarefas diárias e a criação de registos, mostrando-se perfeitamente adequada às nossas necessidades. 
        Desde a sua implementação, a solução impactou significativamente as nossas operações diárias, proporcionando maior controlo sobre todas as tarefas, 
        aumentando a confiança na tomada de decisões e reduzindo o desperdício de produção. Os benefícios específicos que notámos incluem menos desperdício, 
        redução do tempo gasto na verificação de tarefas, rastreamento total da produção e a capacidade de identificar pontos a melhorar.“
      </p>

      <h4 className="h4-MicroGreens">Como descreveria a experiência geral com a solução desenvolvida e o processo de colaboração durante o projeto? </h4>
      <p className="p-feedback-MicroGreens">
        “A experiência geral com a solução desenvolvida foi altamente positiva, superando as expectativas ao resolver várias limitações existentes. 
        O processo de colaboração durante o projeto foi extremamente acessível e competente, adaptando-se continuamente ao feedback recebido para garantir 
        que as nossas necessidades fossem plenamente atendidas. A solução permitiu uma organização mais eficiente das tarefas diárias, 
        o registo detalhado dos tempos ideais de produção para mais de 23 variedades de microvegetais e a gestão das salas de produção, 
        além de simplificar a elaboração de registos na produção.“
      </p>

      <h2 className="h2-MicroGreens">Conclusão</h2>
      <p className="p-MicroGreens">
        O desenvolvimento desta aplicação possibilitou uma gestão mais eficiente e precisa da produção de microvegetais. 
        Ao superar os desafios existentes e fornecer uma solução adaptada às necessidades específicas, 
        a aplicação demonstrou o seu valor ao otimizar processos, reduzir desperdícios e aumentar a qualidade dos produtos.
      </p>

      <h2 className="h2-MicroGreens">Funcionalidades</h2>
  
      <h3 className="h3-PriceTracker">Produção</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">Criação de Ordens de Produção com base nas encomendas de clientes.</li>
        <li className="li-PriceTracker">Impressão de etiquetas para a produção e venda ao público.</li>
        <li className="li-PriceTracker">Relatório de tarefas, ordens ativas, ordens concluídas e calendarização de ordens de produção semanais.</li>
        <li className="li-PriceTracker">Controlo de localizações nas várias zonas de produção.</li>
        <li className="li-PriceTracker">Auxilio no processo produtivo com a aplicação android.</li>
      </ul>

      <h3 className="h3-PriceTracker">Vendas</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">Controlo de Encomendas de Clientes</li>
        <li className="li-PriceTracker">Registo de clientes</li>
      </ul>

      <h3 className="h3-PriceTracker">Compras</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">Controlo e distribuição de custos pelas ordens de produção.</li>
      </ul>
      
      <hr className="divider-MicroGreens" /> 
    </div>
  );
}

export default MicroGreensV2;
