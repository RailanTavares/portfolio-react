import { useState, useEffect } from 'react';

// Movido do seu antigo script.js
const meusProjetos = [
    {
        titulo: "Plate Editor Pro",
        descricao: "É uma aplicação web local desenvolvida em Flask (Python), HTML, CSS e JavaScript, projetada para facilitar a criação rápida e personalizável de placas de ofertas para supermercados. Ele permite aos usuários gerenciar informações de produtos, preços e detalhes de contato, além de exportar as placas em formatos PNG e PDF. Esta solução foi criada para otimizar o processo de comunicação visual e a agilidade na atualização de promoções.",
        tags: ["Python", "Flask", "JavaScript"],
        link: "https://github.com/RailanTavares/Plate-editor-pro",
        imagem: "plate-editor-pro.png" 
    },
    {
        titulo: "Local Video Streaming System",
        descricao: "Plataforma de streaming local projetada para gerenciar e transmitir conteúdo multimídia de marketing diretamente para Smart TVs via rede local. Diferente de soluções baseadas em nuvem, o sistema opera inteiramente via rede local, garantindo estabilidade e zero dependência de internet para a exibição de conteúdos. Com um painel administrativo centralizado, é possível gerenciar playlists de vídeo, anúncios programados e automações sonoras, como o recurso de 'Hora Certa' e vinhetas personalizadas, elevando a experiência de vendas no varejo.",
        tags: ["Python", "Flask", "Redes"],
        link: "https://github.com/RailanTavares/Local-Video-Streaming-System",
        imagem: "local-video-styreaming.png" 
    }
];

function App() {
    const [menuAtivo, setMenuAtivo] = useState('#home');

    // Hook do React que substitui a inicialização do seu script.js
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revelado');
                    observer.unobserve(entry.target); 
                }
            });
        }, { 
            threshold: 0.15, 
            rootMargin: "0px 0px -50px 0px"
        });

        const elementosParaAnimar = document.querySelectorAll('.sessao-conteudo .container, .card-servico, .timeline-item, .habilidades-container, .card-projeto');
        
        elementosParaAnimar.forEach(el => {
            el.classList.add('oculto');
            observer.observe(el);
        });

        // Limpeza do observer quando o componente for desmontado
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header className="header">
                <nav className="container nav">
                    <div className="logo">Railan.<span>TI</span></div>

                    <ul className="nav-links">
                        <li><a href="#home" className={menuAtivo === '#home' ? 'active' : ''} onClick={() => setMenuAtivo('#home')}>Início</a></li>
                        <li><a href="#sobre" className={menuAtivo === '#sobre' ? 'active' : ''} onClick={() => setMenuAtivo('#sobre')}>Sobre</a></li>
                        <li><a href="#projetos" className={menuAtivo === '#projetos' ? 'active' : ''} onClick={() => setMenuAtivo('#projetos')}>Projetos</a></li>
                        <li><a href="#servicos" className={menuAtivo === '#servicos' ? 'active' : ''} onClick={() => setMenuAtivo('#servicos')}>Serviços</a></li> 
                        <li><a href="#contato" className="btn-nav">Contato</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="home" className="hero">
                    <div className="container hero-content">
                        <h1>Desenvolvedor de Sistemas para Internet Movido pela curiosidade tecnológica</h1>
                        <p>
                            Construo soluções modernas, eficientes e escaláveis,
                            focadas em resolver problemas reais com tecnologia.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projetos" className="btn-primary">Ver projetos</a>
                            <a href="#contato" className="btn-secondary">Fale comigo</a>
                        </div>
                    </div>
                </section>

                <section id="sobre" className="sessao-conteudo bg-light">
                    <div className="container grid-layout">
                        <div className="sobre-texto">
                            <h2>Sobre Mim</h2>
                            <p>Sou natural de Corrente, Piauí, e apaixonado por tecnologia e aprendizado contínuo.</p>
                            <p>Minha trajetória combina uma base técnica sólida com uma visão educacional e estratégica, permitindo desenvolver soluções com mais eficiência e propósito.</p>
                            <p>Atualmente, foco na área de Sistemas para Internet, criando aplicações modernas e voltadas para problemas reais.</p>

                            <div className="foto-perfil-container">
                                <img src="foto-perfil.jpeg" alt="Foto de Railan Tavares Marques" className="foto-perfil" />
                            </div>

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
                                        <h4>Pós-Graduação</h4>
                                        <p>IFMG-Informática na Educação.</p>
                                    </div>
                                </div>

                                <div className="timeline-item active-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-date">Presente</div>
                                    <div className="timeline-content">
                                        <h4>Tecnólogo em Sistemas para Internet</h4>
                                        <p>UAPI / UESPI - Graduação com foco total em desenvolvimento Web Full-Stack.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projetos" className="sessao-conteudo">
                    <div className="container">
                        <div className="projetos-header">
                            <h2>Projetos</h2>
                            <p>Alguns trabalhos desenvolvidos por mim</p>
                        </div>
                        {/* AQUI OS PROJETOS SÃO GERADOS AUTOMATICAMENTE */}
                        <div id="container-projetos" className="grid-projetos">
                            {meusProjetos.map((projeto, index) => (
                                <div key={index} className="card-projeto oculto">
                                    <h3>{projeto.titulo}</h3>
                                    <div className="tags-tecnologias">
                                        {projeto.tags.map(tag => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <p>{projeto.descricao}</p>
                                    <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} className="img-projeto" />
                                    <a href={projeto.link} target="_blank" rel="noreferrer" className="btn-link">Ver Repositório →</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id="servicos" className="sessao-conteudo">
                    <div className="container">
                        <div className="projetos-header">
                            <h2>Serviços e Consultoria</h2>
                            <p>Soluções sob medida para o seu negócio e infraestrutura tecnológica.</p>
                        </div>

                        <div className="grid-servicos">
                            <div className="card-servico">
                                <div className="icon-servico">💻</div>
                                <h3>Soluções Web Sob Medida</h3>
                                <p>Desenvolvimento de ferramentas personalizadas para automação de processos e gestão de conteúdo. Foco em criar interfaces intuitivas e sistemas robustos que otimizam o tempo e a produtividade de negócios, especialmente no setor de varejo.</p>
                                <span className="destaque-servico">Destaque: React, Python, Flask, DBs</span>
                                <a href="https://wa.me/5589999812492?text=Olá%20Railan!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20sobre%20Soluções%20Web." target="_blank" rel="noreferrer" className="btn-servico">Solicitar Orçamento</a>
                            </div>

                            <div className="card-servico">
                                <div className="icon-servico">🔧</div>
                                <h3>Suporte Técnico Especializado</h3>
                                <p>Assistência técnica remota para diagnóstico de falhas, configuração de redes, segurança digital e otimização de sistemas operacionais. Soluções rápidas e seguras para garantir que sua infraestrutura funcione sem interrupções.</p>
                                <span className="destaque-servico">Destaque: Suporte Ágil, Redes, Segurança</span>
                                <a href="https://wa.me/5589999812492?text=Olá%20Railan!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20sobre%20Suporte%20Técnico." target="_blank" rel="noreferrer" className="btn-servico">Consultar Disponibilidade</a>
                            </div>

                            <div className="card-servico">
                                <div className="icon-servico">⚙️</div>
                                <h3>Manutenção de Hardware</h3>
                                <p>Especialista em montagem e manutenção preventiva/corretiva de computadores e notebooks. Realizo limpeza técnica profunda, substituição de componentes e consultoria para upgrades estratégicos de desempenho.</p>
                                <span className="destaque-servico">Destaque:PCs Gamer, Upgrades</span>
                                <a href="https://wa.me/5589999812492?text=Olá%20Railan!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20sobre%20Manutenção%20de%20Hardware." target="_blank" rel="noreferrer" className="btn-servico">Solicitar Orçamento</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contato" className="sessao-conteudo bg-light">
                    <div className="container contato">
                        <h2>Contato</h2>
                        <p>Vamos conversar sobre oportunidades ou projetos.</p>

                        <div className="botoes-contato">
                            <a href="https://wa.me/5589999812492" target="_blank" rel="noreferrer" className="btn-social btn-whatsapp">WhatsApp</a>
                            <a href="https://www.instagram.com/rahy_tavares?igsh=MWVxbHcxZHkxdTFtNg==" target="_blank" rel="noreferrer" className="btn-social btn-instagram">Instagram</a>
                            <a href="https://github.com/RailanTavares" target="_blank" rel="noreferrer" className="btn-social btn-github">GitHub</a>
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
    )
}

export default App