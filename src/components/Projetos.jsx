import React from 'react';

const Projetos = () => {
    // Array de objetos contendo os projetos
    const meusProjetos = [
        {
            titulo: "Plate Editor Pro",
            descricao: "É uma aplicação web local desenvolvida em Flask (Python), HTML, CSS e JavaScript, projetada para facilitar a criação rápida e personalizável de placas de ofertas para supermercados. Ele permite aos usuários gerenciar informações de produtos, preços e detalhes de contato, além de exportar as placas em formatos PNG e PDF. Esta solução foi criada para otimizar o processo de comunicação visual e a agilidade na atualização de promoções.",
            tags: ["Python", "Flask", "JavaScript"],
            link: "https://github.com/RailanTavares/Plate-editor-pro",
            imagem: "/plate-editor-pro.png" 
        },
        {
            titulo: "Local Video Streaming System",
            descricao: "Plataforma de streaming local projetada para gerenciar e transmitir conteúdo multimídia de marketing diretamente para Smart TVs via rede local. Diferente de soluções baseadas em nuvem, o sistema opera inteiramente via rede local, garantindo estabilidade e zero dependência de internet para a exibição de conteúdos. Com um painel administrativo centralizado, é possível gerenciar playlists de vídeo, anúncios programados e automações sonoras, como o recurso de 'Hora Certa' e vinhetas personalizadas, elevando a experiência de vendas no varejo.",
            tags: ["Python", "Flask", "Redes"],
            link: "https://github.com/RailanTavares/Local-Video-Streaming-System",
            imagem: "/local-video-styreaming.png" 
        }
    ];

    return (
        <section id="projetos" className="sessao-conteudo">
            <div className="container">
                <div className="projetos-header">
                    <h2>Projetos</h2>
                    <p>Alguns trabalhos desenvolvidos por mim</p>
                </div>
                
                {/* Renderização Dinâmica dos Dados */}
                <div id="container-projetos" className="grid-projetos">
                    {meusProjetos.map((projeto, index) => (
                        <div className="card-projeto" key={index}>
                            <h3>{projeto.titulo}</h3>
                            
                            <div className="tags-projeto" style={{ marginBottom: '15px' }}>
                                {projeto.tags.map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex} 
                                        style={{
                                            background: '#eff6ff', 
                                            padding: '4px 8px', 
                                            borderRadius: '4px', 
                                            fontSize: '0.8rem', 
                                            marginRight: '5px'
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <p>{projeto.descricao}</p>
                            <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} className="img-projeto" />
                            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                                Ver Repositório →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projetos;