import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="container nav">
                <div className="logo">Railan.<span>TI</span></div>
                <ul className="nav-links">
                    <li><a href="#home" className="active">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato" className="btn-nav">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;