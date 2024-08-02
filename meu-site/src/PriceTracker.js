import React from 'react';
import './PriceTracker.css';




function PriceTracker() {
  return (
    <div className="PriceTracker">
      <h1 className="h1-PriceTracker">PriceTracker</h1>
      <hr className="divider-PriceTracker" />      
      <h2 className="h2-PriceTracker">Introdução</h2>
      
      <p className="p-PriceTracker">
      O principal objetivo do desenvolvimento desta aplicação é aprimorar meu conhecimento em Python, 
      através de um projeto mais complexo. Este projeto de web scraping envolve técnicas 
      avançadas de programação, manipulação de dados e automação. 
      Além disso, aproveito para criar algo que pode ser extremamente útil no dia a dia. 
      A aplicação rastreia e compara preços de produtos em diferentes hipermercados, 
      ajudando a encontrar as melhores ofertas. 
      Isso economiza tempo e dinheiro, tornando as compras mais eficientes.
        </p> 



      <h2 className="h2-PriceTracker">Desafios</h2>
      <p className="p-PriceTracker">
      Os principais desafios no desenvolvimento desta aplicação de web scraping são diversos e complexos. 
      Primeiro, existe a questão da variedade de sites dos hipermercados, cada um com sua estrutura de HTML, 
      o que exige adaptações específicas no código de scraping. Em segundo lugar, a mudança que a estrutura dos sites é um desafio, 
      pois atualizações ou reformulações podem tornar o código de scraping inútil. Outro desafio é lidar com bloqueios de IP e medidas 
      anti-scraping que alguns sites podem ter. Além disso, garantir a precisão e atualização dos dados recolhidos é crucial.
       Por fim, a integração e apresentação dos dados de forma clara e útil ao utilizador final também representa um desafio, 
      exigindo habilidades em front-end e visualização de dados.
      
      </p>

      <h2 className="h2-PriceTracker">Processo de Recolha</h2>
      <p className="p-PriceTracker">
      Foi realizada uma recolha de dados nos sites das seguintes lojas: Continente, Auchan, Pingo Doce e Aldi.
      O objetivo foi reunir informações sobre diversos artigos, incluindo:
      </p>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">Código</li>
        <li className="li-PriceTracker">Descrição</li>
        <li className="li-PriceTracker">Preço</li>
        <li className="li-PriceTracker">Unidade</li>
        <li className="li-PriceTracker">EAN 13</li>
        <li className="li-PriceTracker">Marca</li>
        <li className="li-PriceTracker">Link do artigo</li>
      </ul>


      <h3 className="h3-PriceTracker">1. Desafios e Soluções Iniciais:</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">A recolha dos artigos foi demorada devido a limitações dos sites.</li>
        <li className="li-PriceTracker">O site do Pingo Doce bloqueou temporariamente os pedidos devido à quantidade elevada de requisições. 
        Para resolver isso, implementámos um timer entre os pedidos, evitando que fossem confundidos com ataques DDoS.
        </li>        
      </ul>

      <h3 className="h3-PriceTracker">2. Criação da Tabela MATRIZ:</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">Foram criadas quatro tabelas distintas, uma para cada loja.</li>
        <li className="li-PriceTracker">Com essas tabelas, 
          foi criada uma tabela MATRIZ para encontrar os artigos comuns entre as lojas.</li>        
      </ul>

      <h2 className="h2-PriceTracker">Metodologia de Matching</h2>
      <h3 className="h3-PriceTracker">1. Tentativa Inicial:</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">A primeira abordagem foi o uso do nome dos artigos para encontrar correspondências.</li>
        <li className="li-PriceTracker">Este método revelou-se ineficaz devido ao mesmo artigo ter nomes diferentes entre as várias lojas.</li>        
      </ul>

      <h3 className="h3-PriceTracker">2. Abordagem pelo EAN 13:      </h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">Optei por utilizar o EAN 13 o que se revelou ser o método ideal.</li>
        <li className="li-PriceTracker">Foram excluídos os artigos de marca branca, pois a correspondência desses artigos exigiria uma verificação manual para garantir precisão.</li>
        <li className="li-PriceTracker">Após a aplicação do método de matching pelo EAN 13, consegui identificar 3500 artigos com correspondências entre as lojas, 
          observei ainda que a maioria dos artigos não tinha correspondência entre todas as quatro lojas sendo que existia correspondência em pelo menos duas.</li>                
      </ul>


      <h2 className="h2-PriceTracker">Desafios na Requisição de Preços</h2>
      <h3 className="h3-PriceTracker">1. Atualização em Tempo Real:</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">O objetivo foi fazer a requisição de preços no momento da pesquisa do utilizador, evitando a necessidade de carregar os preços de todos os artigos previamente.        </li>
      </ul>

      <h3 className="h3-PriceTracker">2. Desempenho e Limitações dos Sites:</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">Encontrei dificuldades significativas em termos de rapidez de resposta dos sites. 
          Foi necessário garantir que o número de pedidos não excedesse o limite considerado aceitável pelos sites, evitando assim bloqueios.
          Esta limitação levou a um tempo de pesquisa prolongado para encontrar os preços dos artigos.</li>
      </ul>


      
      <h3 className="h3-PriceTracker">Soluções Testadas</h3>
      <ul className="ul-PriceTracker">
        <li className="li-PriceTracker">Espera entre Pedidos - A espera de alguns segundos entre pedidos resulta em um tempo muito longo para a aplicação encontrar os preços.</li>
        <li className="li-PriceTracker">Uso de Proxies Gratuitas - A maioria das proxies gratuitas não funcionam corretamente, 
          resultando em um tempo maior para encontrar uma proxy funcional do que esperar os timings para evitar bloqueios.</li>        
        <li className="li-PriceTracker">Cache - Utilizar cache ajuda, pois só busca os artigos cujo preço não foi procurado no mesmo dia. No entanto, isso implica que todos os dias seja necessário procurar os preços de todos os artigos.</li>
      </ul>

      <h2 className="h2-PriceTracker">Conclusão</h2>
      <p className="p-PriceTracker">
      O projeto demonstrou que só seria viável se contasse com um serviço em operação 24 horas por dia, 
      atualizando os preços em tempo real e inserindo tempos de espera entre os pedidos para evitar bloqueios. 
      No entanto, encontrei uma aplicação portuguesa, chamada SuperSave, que oferece exatamente o que eu procurava com este projeto. 
      A SuperSave está disponível na App Store e Google Play, e é possível encontrar mais informações em supersave.pt.
      
      </p>
      <hr className="divider-PriceTracker" /> 


        
        
      
       
    </div>
  );
}

export default PriceTracker;