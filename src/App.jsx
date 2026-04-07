import React from 'react';
import Header from './components/Header';
import Projetos from './components/Projetos';
import './index.css';

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

        {/* Seção Sobre */}
        <section id="sobre" className="sessao-conteudo bg-light">
          <div className="container grid-layout">
            <div className="sobre-texto">
              <h2>Sobre Mim</h2>
              <p>Sou natural de Corrente, Piauí, e apaixonado por tecnologia e aprendizado contínuo.</p>
              <p>Minha trajetória combina uma base técnica sólida com uma visão educacional e estratégica, permitindo desenvolver soluções com mais eficiência e propósito.</p>
              <p>Atualmente, foco na área de Sistemas para Internet, criando aplicações modernas e voltadas para problemas reais.</p>
              <div className="foto-perfil-container">
                <img src="/foto-perfil.jpeg" alt="Foto de Railan Tavares Marques" className="foto-perfil" />
              </div>
            </div>
            
            <div className="sobre-skills">
                <h3>🚀 Minha Trajetória Acadêmica</h3>
                
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2012</div>
                        <div className="timeline-content">
                            <h4>Técnico em Informática</h4>
                            <p>CEETI - Início da jornada técnica e fundamentos de computação.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2019</div>
                        <div className="timeline-content">
                            <h4>Graduação em Pedagogia</h4>
                            <p>UESPI - Desenvolvimento de visão crítica e metodologias de ensino.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2025</div>
                        <div className="timeline-content">
                            <h4>Cursos de Aperfeiçoamento</h4>
                            <p>UFJF-Gestão da Educação Inclusiva Digital na era do acesso digital.</p>
                        </div>
                    </div>
					
					<div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2025</div>
                        <div className="timeline-content">
                            <h4>Capacitação Profissional</h4>
                            <p>IFCE-Sistemas Embarcados.</p>
                        </div>
                    </div>
					
					<div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2026</div>
                        <div className="timeline-content">
                            <h4>Pós-Graduação </h4>
                            <p>IFMG-Informática na Educação.</p>
                        </div>
                    </div>

                    <div className="timeline-item active-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">Presente</div>
                        <div className="timeline-content">
                            <h4>Tecnologo em tecnologias Sistemas para Internet</h4>
                            <p>UAPI / UESPI - Graduação com foco total em desenvolvimento Web Full-Stack.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="habilidades-container">
                <h3>💻 Linguagens e Habilidades</h3>
                
                <div className="skill-group">
                    <span className="skill-label">Desenvolvimento Full-Stack</span>
                    <div className="tags-skills">
                        <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                        <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                        <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                        <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
                        <img alt="Flask" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" />
                    </div>
                </div>

                <div className="skill-group">
                    <span className="skill-label">Dados, Infra e Gestão Digital</span>
                    <div className="tags-skills">
                        <img alt="Oracle" src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" />
                        <img alt="SQL Server" src="https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" />
                        <img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
                    </div>
                </div>
            </div>
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
			  <a href="https://www.instagram.com/rahy_tavares?igsh=MWVxbHcxZHkxdTFtNg==" target="_blank" rel="noopener noreferrer" className="btn-social btn-instagram">Instagram</a>
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