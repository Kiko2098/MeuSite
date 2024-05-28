import React from 'react';
import './MicroGreens.css';

function Projects() {
  return (
    <div className="MicroGreens">
      <h1 className="h1-MicroGreens">MicroGreens</h1>
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
      produzido de maneira eficiente.</p>

        <h2 className="h2-MicroGreens">Solução</h2>
        <p className="p-MicroGreens">
        Foi desenvolvida uma aplicação de gestão com versões desktop (C#) e Android (Kotlin) para 
        centralizar e registrar todos os dados sobre cada uma das ordens de produção numa base de dados local.</p>

        <h2 className="h2-MicroGreens">Implementação</h2>
        <p className="p-MicroGreens">Adotámos uma abordagem de desenvolvimento ágil, utilizando sprints e 
        feedback contínuo até alcançar um produto sólido e funcional.</p>

        <h2 className="h2-MicroGreens">Resultados</h2>
        <p className="p-MicroGreens">A aplicação proporcionou um maior controlo sobre todas as tarefas, 
        permitindo que as decisões sejam tomadas com mais informação e com isso reduzir o desperdício de produção. Além disso, existem benefícios específicos, 
        como a diminuição do tempo gasto na verificação de tarefas, o rastreamento completo da produção e a identificação de áreas para melhoria contínua.</p>
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
          a aplicação demonstrou o seu valor ao otimizar processos, reduzir desperdícios e aumentar a qualidade dos produtos. </p>


        <h2 className="h2-MicroGreens">Futuras Implementações e Recomendações</h2>
  

        <p className="p-MicroGreens"><strong>Controle de Inventário das Matérias-Primas:</strong> Este módulo permite a gestão detalhada dos stocks de matérias-primas utilizadas na produção. Será possível registar, monitorar e atualizar as quantidades disponíveis, além de acompanhar o histórico de movimentos (entradas e saídas) de cada item.</p>

        <p className="p-MicroGreens"><strong>Sistema de Cálculo de Necessidades:</strong> Um sistema que calcula automaticamente as necessidades de matérias-primas com base nos planos de produção e nos níveis de stock atuais. Isto garante que os matérias-primas necessárias estão sempre disponíveis, evitando interrupções na produção.</p>

        <p className="p-MicroGreens"><strong>Módulo de Gestão de Compras:</strong> Este módulo proporciona um controlo eficiente sobre os custos associados às matérias-primas. Permite a gestão de pedidos de compra e controle dos custos envolvidos, contribuindo para uma gestão financeira mais precisa e eficiente.</p>

        
        <hr className="divider-MicroGreens" /> 
      
       
    </div>
  );
}

export default Projects;