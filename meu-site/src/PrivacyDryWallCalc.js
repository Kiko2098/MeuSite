import React, { useState } from 'react';
import './PrivacyDryWallCalc.css';

function PrivacyDryWallCalc() {
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang); 
  };

 

  return (
    <div>
      
      <button
        className={`button ${language === 'pt' ? 'selected' : ''}`}
        onClick={() => handleLanguageChange('pt')}
      >
        Português
      </button>
      <button
        className={`button ${language === 'en' ? 'selected' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>

      {language === 'pt' ? (
        <div>
          <h1 className="arvo-bold-cab2">Politica de Privacidade DryWallCalc</h1>
          <p  className="arvo-regular">A sua privacidade é importante para nós. A nossa aplicação Android foi desenvolvida com o intuito de fornecer uma experiência 
            segura e eficiente sem a necessidade de recolher, armazenar ou compartilhar quaisquer dados pessoais dos utilizadores.
          </p>

          <h2 className="arvo-bold-cab">1.Recolha de Dados Pessoais</h2>
          <p className="arvo-regular">A sua privacidade é importante para nós. A nossa aplicação Android foi desenvolvida com o intuito de fornecer uma experiência 
            segura e eficiente sem a necessidade de recolher, armazenar ou compartilhar quaisquer dados pessoais dos utilizadores.
          </p>

          <h2 className="arvo-bold-cab">2.Permissões</h2>
          <p className="arvo-regular">A nossa aplicação pode solicitar certas permissões necessárias para o funcionamento de suas funcionalidades. As permissões que podem ser solicitadas incluem, mas não estão limitadas a:
            -Acesso ao Armazenamento: para permitir que o utilizador salve ou acesse arquivos no seu dispositivo.
            Essas permissões são solicitadas apenas para garantir o funcionamento adequado dos recursos da aplicação e nenhum dado pessoal é recolhido ou compartilhado com terceiros.
          </p>

          <h2 className="arvo-bold-cab">3.Cookies e Tecnologias de Rastreio</h2>
          <p className="arvo-regular">A nossa aplicação não utiliza cookies ou qualquer outra forma de tecnologia de rastreio, como pixels de rastreamento ou 
            identificadores de dispositivos para coletar informações sobre os utilizadores.</p>

          <h2 className="arvo-bold-cab">4.Dados de Diagnóstico e Registos de Erros</h2>
          <p className="arvo-regular">Para melhorar o desempenho da aplicação, podemos recolher dados de diagnóstico e informações sobre erros ou falhas.
             No entanto, esses dados não contêm informações pessoais e são usados apenas para correção de erros e aprimoramento da experiência do utilizador.</p>

          <h2 className="arvo-bold-cab">5.Segurança</h2>
          <p className="arvo-regular">Mesmo que não recolhamos dados pessoais, tomamos medidas adequadas para proteger o ambiente de utilização da aplicação, ~
            garantindo que os seus dados e o seu dispositivo estejam seguros enquanto utiliza a aplicação.
            </p>

          <h2 className="arvo-bold-cab">6.Alterações à Política de Privacidade</h2>
          <p className="arvo-regular">Reservamo-nos o direito de atualizar esta política de privacidade sempre que necessário. 
            Qualquer alteração será publicada e comunicada através de uma atualização da aplicação, 
            para manter o utilizador sempre informado.
            </p>

          <h2 className="arvo-bold-cab">7.Contato</h2>
          <p className="arvo-regular">Se tiver alguma dúvida sobre esta Política de Privacidade ou sobre o funcionamento da aplicação, 
            sinta-se à vontade para nos contatar pelo e-mail: contacto@franciscoalmeida.pt .
            </p>
          
            <hr className="divider-PWC" />   



        </div>
      ) : (
        
        <div>
          <h1 className="arvo-bold-cab2">Privacy Policy for DryWallCalc</h1>
<p className="arvo-regular">Your privacy is important to us. Our Android application was developed to provide a safe and efficient experience without the need to collect, store, or share any personal data from users.</p>

<h2 className="arvo-bold-cab">1.Collection of Personal Data</h2>
<p className="arvo-regular">Your privacy is important to us. Our Android application was developed to provide a safe and efficient experience without the need to collect, store, or share any personal data from users.</p>

<h2 className="arvo-bold-cab">2.Permissions</h2>
<p className="arvo-regular">Our application may request certain permissions necessary for the proper functioning of its features. The permissions that may be requested include, but are not limited to:
- Storage Access: to allow the user to save or access files on their device.
These permissions are requested solely to ensure the proper functioning of the application's features, and no personal data is collected or shared with third parties.</p>

<h2 className="arvo-bold-cab">3.Cookies and Tracking Technologies</h2>
<p className="arvo-regular">Our application does not use cookies or any other tracking technologies, such as tracking pixels or device identifiers, to collect user information.</p>

<h2 className="arvo-bold-cab">4.Diagnostic Data and Error Logs</h2>
<p className="arvo-regular">To improve the application's performance, we may collect diagnostic data and information about errors or crashes. However, this data does not contain personal information and is used solely to correct errors and enhance the user experience.</p>

<h2 className="arvo-bold-cab">5.Security</h2>
<p className="arvo-regular">Although we do not collect personal data, we take appropriate measures to protect the application's usage environment, ensuring that your data and device remain secure while using the application.</p>

<h2 className="arvo-bold-cab">6.Changes to the Privacy Policy</h2>
<p className="arvo-regular">We reserve the right to update this privacy policy whenever necessary. Any changes will be published and communicated through an application update to ensure that the user is always informed.</p>

<h2 className="arvo-bold-cab">7.Contact</h2>
<p className="arvo-regular">If you have any questions about this Privacy Policy or about the functioning of the application, feel free to contact us at: contacto@franciscoalmeida.pt.</p>

<hr className="divider-PWC" />   
        </div>
      )}
    </div>
  );
}

export default PrivacyDryWallCalc;