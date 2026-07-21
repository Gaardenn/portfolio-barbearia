import "../styles/Header.css";
import { useEffect, useState } from "react";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={scrolled ? "header scrolled" : "header"}>
                <a href="#hero" className="header-logo">
                    <img src="./logo.png" title="logo" className="header-logo-img" />
                    <h3 className="header-logo-name">NAVALHA <span className="header-logo-name-golden">DE OURO</span></h3>
                </a>
                <div className="header-links">
                    <a href="#hero" className="header-links-text">Início</a>
                    <a href="#sobre" className="header-links-text">Sobre</a>
                    <a href="#servicos" className="header-links-text">Serviços</a>
                    <a href="#galeria" className="header-links-text">Galeria</a>
                    <a href="#depoimentos" className="header-links-text">Depoimentos</a>
                    <a href="#agendamento"className="header-links-button">Agendar Horário</a>
                </div>
                <button className={`header-button ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span />
                    <span />
                    <span />
                </button>
            </header>

            <nav className={`drawer ${menuOpen ? "open" : ""}`}>
                <ul className="drawer-list">
                    <li><a href="#hero" className="drawer-list-link" onClick={() => setMenuOpen(false)}>Início</a></li>
                    <li><a href="#sobre" className="drawer-list-link" onClick={() => setMenuOpen(false)}>Sobre</a></li>
                    <li><a href="#servicos" className="drawer-list-link" onClick={() => setMenuOpen(false)}>Serviços</a></li>
                    <li><a href="#galeria" className="drawer-list-link" onClick={() => setMenuOpen(false)}>Galeria</a></li>
                    <li><a href="#depoimentos" className="drawer-list-link" onClick={() => setMenuOpen(false)}>Depoimentos</a></li>
                    <li><a href="#agendamento" className="drawer-list-button" onClick={() => setMenuOpen(false)}>Agendar Horário</a></li>
                </ul>
            </nav>
        </>
    );
}