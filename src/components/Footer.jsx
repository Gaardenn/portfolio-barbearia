import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="top">
                    <div className="company">
                        <h2 className="footer-head">NAVALHA <span className="footer-head-golden">DE OURO</span></h2>
                        <p className="footer-subhead">Tradição e precisão em cada corte desde 2015. Sua melhor experiência começa aqui.</p>
                        <div className="footer-icons">
                            <a href="" className="footer-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="" className="footer-icon"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="" className="footer-icon"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div>
                            <p className="footer-navigation-head">NAVEGAÇÃO</p>
                            <ul className="footer-navigation-list">
                                <li><a href="#hero">Início</a></li>
                                <li><a href="#sobre">Sobre</a></li>
                                <li><a href="#servicos">Serviços</a></li>
                                <li><a href="#galeria">Galeira</a></li>
                                <li><a href="#depoimentos">Depoimentos</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="footer-schedules-head">HORÁRIOS</p>
                            <ul className="footer-schedules-list">
                                <li className="footer-schedules-list-item">Seg-sex: 9h-20h</li>
                                <li className="footer-schedules-list-item">Sábado: 9h-18h</li>
                                <li className="footer-schedules-list-closed">Dom: Fechado</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <p className="footer-contact-head">CONTATO</p>
                        <p className="footer-contact-text">Rua das Tesouras, 123 - Centro, Curitiba/PR</p>
                        <p className="footer-contact-text">(41) 98765-4321</p>
                        <a href="mailto:contato@navalhaouro.com" className="footer-contact-text">contato@navalhaouro.com</a>
                    </div>
                </div>
                <div className="footer-end">
                    <p className="footer-copyright">© 2026 Navalha de Ouro. Todos os direitos reservados.</p>
                    <a href="" className="footer-dev">Desenvolvido por ...</a>
                </div>
            </footer>
        </>
    );
}