import React from 'react';
import Header from './components/Header';
import Projetos from './components/Projetos';
import './index.css'; // ou App.css dependendo de onde colocou os estilos

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Seção Hero */}
        <section id="home" className="hero">
          <div className="container hero-content">
            <h1>Desenvolvedor de Sistemas para Internet Movido pela curiosidade tecnológica</h1>
            <p>Construo soluções modernas, eficientes e escaláveis, focadas em resolver problemas reais com tecnologia.</p>
            <div className="hero-buttons">
              <a href="#projetos" className="btn-primary">Ver projetos</a>
              <a href="#contato" className="btn-secondary">Fale comigo</a>
            </div>
          </div>
        </section>

        {/* Seção Sobre (Resumida aqui para o exemplo, você pode colar todo o seu HTML convertendo class para className) */}
        <section id="sobre" className="sessao-conteudo bg-light">
          <div className="container grid-layout">
            <div className="sobre-texto">
              <h2>Sobre Mim</h2>
              <p>Sou natural de Corrente, Piauí, e apaixonado por tecnologia e aprendizado contínuo...</p>
              <div className="foto-perfil-container">
                <img src="/foto-perfil.jpeg" alt="Foto de Railan Tavares Marques" className="foto-perfil" />
              </div>
            </div>
            {/* Adicione o restante da sua seção sobre (Timeline, Skills) aqui, lembrando de trocar class por className e fechar as tags img */}
          </div>
        </section>

        {/* Componente Dinâmico de Projetos */}
        <Projetos />

        {/* Seção Contato */}
        <section id="contato" className="sessao-conteudo bg-light">
          <div className="container contato">
            <h2>Contato</h2>
            <p>Vamos conversar sobre oportunidades ou projetos.</p>
            <div className="botoes-contato">
              <a href="https://wa.me/5589999812492" target="_blank" rel="noopener noreferrer" className="btn-social btn-whatsapp">WhatsApp</a>
              <a href="https://github.com/RailanTavares" target="_blank" rel="noopener noreferrer" className="btn-social btn-github">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <p>&copy; 2026 - Railan Tavares Marques</p>
        </div>
      </footer>
    </>
  );
}

export default App;