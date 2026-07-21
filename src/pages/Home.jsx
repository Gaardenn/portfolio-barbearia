import { Header } from "../components/Header";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeft, faArrowRight, faBagShopping, faGripLines, faScissors, faStar as faSolidStar, faCircle, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "../components/Footer";
import { useObserver } from "../hooks/useObserver";
import { useEffect, useRef, useState } from "react";
import { Lightbox } from "../components/Lightbox";
import { TestimonialCard } from "../components/TestimonialCard";

export function Home() {
    const [aboutRef, aboutVisible] = useObserver();
    const [card1Ref, card1Visible] = useObserver();
    const [card2Ref, card2Visible] = useObserver();
    const [card3Ref, card3Visible] = useObserver();
    const [card4Ref, card4Visible] = useObserver();
    const [card5Ref, card5Visible] = useObserver();
    const [card6Ref, card6Visible] = useObserver();
    const [opened, setOpened] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [position, setPosition] = useState(-33.3334);
    const [hasTransition, setHasTransition] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(
        window.innerWidth >= 1024 ? 3 : 1
    );
    const galleryRef = useRef(null);
    const cardTouchStartX = useRef(null);
    const pages = [];

    const images = [
        "galeria1.jpg",
        "galeria2.jpg",
        "galeria3.jpg",
        "galeria4.jpg",
        "galeria5.jpg",
        "galeria6.jpg",
        "galeria7.jpg",
        "galeria8.jpg",
        "galeria9.jpg",
        "galeria10.jpg"
    ];

    const testimonials = [
        {
            nome: "Rafael M.",
            descricao: "Melhor barbearia da região, sem dúvida. O corte sempre sai impecável e o atendimento é nota 10.",
            desde: 2021,
            nota: 5
        },
        {
            nome: "Carlos T.",
            descricao: "Ambiente incrível e atendimento de primeira. Virei cliente fiel e indico para todo mundo.",
            desde: 2022,
            nota: 5
        },
        {
            nome: "Bruno S.",
            descricao: "A barba nunca ficou tão bem alinhada. O Bruno é muito preciso e profissional. Recomendo demais.",
            desde: 2023,
            nota: 4
        }
    ];


    for (let i = 0; i < testimonials.length; i += itemsPerPage) {
        pages.push(testimonials.slice(i, i + itemsPerPage));
    }

    useEffect(() => {
        const wrapper = galleryRef.current;

        if (!wrapper) return;

        const firstImage = wrapper.querySelector("img");
        const grid = wrapper.querySelector(".gallery-grid");

        const gap = parseFloat(getComputedStyle(grid).columnGap);

        wrapper.scrollLeft = firstImage.offsetWidth + gap;

        const mq = window.matchMedia("(min-width: 1024px)");

        function handleChange(e) {
            setItemsPerPage(e.matches ? 3 : 1);
            setCurrentTestimonial(0);
        }

        mq.addEventListener("change", handleChange);

        return () => mq.removeEventListener("change", handleChange);
    }, []);

    function handlePointerDown(e) {
        cardTouchStartX.current = e.clientX;

        setHasTransition(false);
    }

    function handlePointerMove(e) {
        if (cardTouchStartX.current === null) return;

        setDragOffset(e.clientX - cardTouchStartX.current);
    }

    function handlePointerUp(e) {
        if (cardTouchStartX.current === null) return;

        const distance = e.clientX - cardTouchStartX.current;
        cardTouchStartX.current = null;

        if (distance < -50) {
            setHasTransition(true);
            setPosition(-66.6668);
            setDragOffset(0);

            setTimeout(() => {
                setHasTransition(false);
                setCurrentTestimonial(prev => prev === pages.length - 1 ? 0 : prev + 1);
                setPosition(-33.3334);
                setDragOffset(0);

                requestAnimationFrame(() => {
                    setHasTransition(true);
                });
            }, 250);
        } else if (distance > 50) {
            setHasTransition(true);
            setPosition(0);
            setDragOffset(0);

            setTimeout(() => {
                setHasTransition(false);
                setCurrentTestimonial(prev => prev === 0 ? pages.length - 1 : prev - 1);
                setPosition(-33.3334);
                setDragOffset(0);

                requestAnimationFrame(() => {
                    setHasTransition(true);
                });
            }, 250);
        } else {
            setHasTransition(true);
            setPosition(-33.3334);
            setDragOffset(0);
        }
    }

    return (
        <>
            {opened && <Lightbox images={images} opened={opened} setOpened={setOpened} currentImage={currentImage} setCurrentImage={setCurrentImage} />}

            <Header />

            <section id="hero" className="hero">
                <div className="hero-badge">
                    <FontAwesomeIcon icon={faSolidStar} className="hero-badge-text" />
                    <p className="hero-badge-text">BARBEARIA PREMIUM DESDE 2015</p>
                </div>
                <h1 className="hero-head">Estilo é Detalhe.<br /><span className="hero-head-golden">Detalhe é tudo.</span></h1>
                <p className="hero-subhead">Cortes precisos, barba impecável e uma experiência que só a tradição da navalha pode oferecer.</p>
                <div className="hero-buttons">
                    <a href="#agendamento" className="hero-buttons-primary">Agendar Horário</a>
                    <a href="#servicos" className="hero-buttons-secondary">Ver Serviços</a>
                </div>
            </section>

            <section ref={aboutRef} id="sobre">
                <img src="about.jpg" alt="cadeiras" title="cadeiras" className={`about-image ${aboutVisible ? "show" : ""}`} />
                <div className={`about-info ${aboutVisible ? "show" : ""}`}>
                    <p className="about-info-label">NOSSA HISTÓRIA</p>
                    <h2 className="about-info-head">Tradição que Vira Arte</h2>
                    <p className="about-info-text">Fundada em 2015, a Navalha de Ouro, nasceu da paixão pela técnicas clássicas de navalha combinadas com as tendências mais modernas do estilo masculino.</p>
                    <div className="about-info-grid">
                        <div className="about-info-grid-item">
                            <p className="about-info-grid-item-number">9+</p>
                            <p className="about-info-grid-item-text">anos de tradição</p>
                        </div>
                        <div className="about-info-grid-item">
                            <p className="about-info-grid-item-number">5k+</p>
                            <p className="about-info-grid-item-text">cortes</p>
                        </div>
                        <div className="about-info-grid-item">
                            <div className="about-info-grid-item-number">
                                <p>4.9</p>
                                <FontAwesomeIcon icon={faSolidStar} />
                            </div>
                            <p className="about-info-grid-item-text">avaliação</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="servicos" className="services">
                <p className="services-label">O QUE OFERECEMOS</p>
                <h2 className="services-head">Nossos Serviços</h2>
                <p className="services-subhead">Técnica e precisão em cada atendimento</p>
                <div className="services-grid">
                    <a ref={card1Ref} href="#agendamento" className={`services-grid-card ${card1Visible ? "show" : ""}`}>
                        <div className="services-grid-card-info">
                            <FontAwesomeIcon icon={faAngleRight} className="services-grid-card-icon" />
                            <div>
                                <h3 className="services-grid-card-head">Corte Clássico</h3>
                                <p className="services-grid-card-description">Tesoura e máquina, toalha quente</p>
                            </div>
                        </div>
                        <p className="services-grid-card-price">R$60</p>
                    </a>
                    <a ref={card2Ref} href="#agendamento" className={`services-grid-card ${card2Visible ? "show" : ""}`}>
                        <div className="services-grid-card-info">
                            <FontAwesomeIcon icon={faGripLines} className="services-grid-card-icon" />
                            <div>
                                <h3 className="services-grid-card-head">Barba Completa</h3>
                                <p className="services-grid-card-description">Navalha + hidratação</p>
                            </div>
                        </div>
                        <p className="services-grid-card-price">R$45</p>
                    </a>
                    <a ref={card3Ref} href="#agendamento" className={`services-grid-card ${card3Visible ? "show" : ""}`}>
                        <div className="services-grid-card-info">
                            <FontAwesomeIcon icon={faBagShopping} className="services-grid-card-icon" />
                            <div>
                                <h3 className="services-grid-card-head">Combo Corte + Barba</h3>
                                <p className="services-grid-card-description">Experiência completa</p>
                            </div>
                        </div>
                        <p className="services-grid-card-price">R$95</p>
                    </a>
                    <a ref={card4Ref} href="#agendamento" className={`services-grid-card ${card4Visible ? "show" : ""}`}>
                        <div className="services-grid-card-info">
                            <FontAwesomeIcon icon={faScissors} className="services-grid-card-icon" />
                            <div>
                                <h3 className="services-grid-card-head">Sobrancelha</h3>
                                <p className="services-grid-card-description">Design e alinhamento</p>
                            </div>
                        </div>
                        <p className="services-grid-card-price">R$20</p>
                    </a>
                    <a ref={card5Ref} href="#agendamento" className={`services-grid-card ${card5Visible ? "show" : ""}`}>
                        <div className="services-grid-card-info">
                            <FontAwesomeIcon icon={faSpinner} className="services-grid-card-icon" />
                            <div>
                                <h3 className="services-grid-card-head">Pigmentação de Barbga</h3>
                                <p className="services-grid-card-description">Cobertura de grisalhos</p>
                            </div>
                        </div>
                        <p className="services-grid-card-price">R$70</p>
                    </a>
                    <a ref={card6Ref} href="#agendamento" className={`services-grid-card ${card6Visible ? "show" : ""}`}>
                        <div className="services-grid-card-info">
                            <FontAwesomeIcon icon={faCircle} className="services-grid-card-icon" />
                            <div>
                                <h3 className="services-grid-card-head">Corte Infantil</h3>
                                <p className="services-grid-card-description">Até 12 anos</p>
                            </div>
                        </div>
                        <p className="services-grid-card-price">R$40</p>
                    </a>
                </div>
            </section>

            <section id="galeria" className="gallery">
                <p className="gallery-label">NOSSO TRABALHO</p>
                <h2 className="gallery-head">Galeria</h2>
                <div ref={galleryRef} className="gallery-wrapper">
                    <div className="gallery-grid">
                        {images.map((i, index) => (
                            <div key={"div " + i} className={["gallery-item", index % 5 === 0 && "gallery-grid-big", index === 0 && "gallery-grid-big-desktop", (index === 5 || index === 8 || index === 9) && "gallery-grid-large"].filter(Boolean).join(" ")} onClick={() => { setOpened(true); setCurrentImage(index); }}>
                                <img key={i} src={i} />
                                <div key={"div icon " + i} className="gallery-overlay">
                                    <FontAwesomeIcon key={i + " icon"} icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-info">
                    <FontAwesomeIcon icon={faArrowLeft} className="gallery-info-icon " />
                    <p className="gallery-info-text" >deslize para ver mais</p>
                    <FontAwesomeIcon icon={faArrowRight} className="gallery-info-icon" />
                </div>
            </section>

            <section id="depoimentos" className="testimonials">
                <p className="testimonials-label">O QUE DIZEM</p>
                <h2 className="testimonials-head">Nossos Clientes</h2>
                <div className="carousel" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp} >
                    <div className="track" style={{ transform: `translateX(calc(${position}% + ${dragOffset}px))`, transition: hasTransition ? "transform .25s ease" : "none" }}>
                        <div className="testimonials-page">
                            {pages[currentTestimonial === 0 ? pages.length - 1 : currentTestimonial - 1].map((t, i) => (
                                <TestimonialCard key={i} testimonial={t} />
                            ))}
                        </div>
                        <div className="testimonials-page">
                            {pages[currentTestimonial].map((t, i) => (
                                <TestimonialCard key={i} testimonial={t} />
                            ))}
                        </div>
                        <div className="testimonials-page">
                            {pages[currentTestimonial === pages.length - 1 ? 0 : currentTestimonial + 1].map((t, i) => (
                                <TestimonialCard key={i} testimonial={t} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="testimonials-carousel">
                    {Array.from({ length: pages.length }).map((i, index) => (
                        <FontAwesomeIcon key={index + " testimonial-icon"} icon={faCircle} className={currentTestimonial === index ? "testimonials-carousel-actual" : " testimonials-carousel-other"} onClick={() => setCurrentTestimonial(index)} />
                    ))}
                </div>
                <div className="testimonials-info">
                    <FontAwesomeIcon icon={faArrowLeft} className="testimonials-info-icon" />
                    <p className="testimonials-info-text" >swipe para navegar</p>
                    <FontAwesomeIcon icon={faArrowRight} className="testimonials-info-icon" />
                </div>
            </section>

            <section id="agendamento" className="scheduling">
                <div className="shceduling-content">
                    <p className="scheduling-label">FALE CONOSCO</p>
                    <h2 className="scheduling-head">Pronto Para o Seu Novo Visual?</h2>
                    <p className="scheduling-description">Agende seu horário em segundos, direto pelo WhatsApp. Resposta rápida, sem burocracia.</p>
                    <ul className="scheduling-list">
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <p className="scheduling-list-text">Confirmação em minutos</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <p className="scheduling-list-text">Sem taxas de agendamento</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <p className="scheduling-list-text">Horários flexíveis</p>
                        </li>
                    </ul>
                </div>
                <div className="scheduling-card">
                    <FontAwesomeIcon icon={faWhatsapp} className="scheduling-card-icon" />
                    <h3 className="scheduling-card-head">Fale conosco agora</h3>
                    <a href="" rel="noopener noreferrer" className="scheduling-card-button">Agendar pelo WhatsApp</a>
                    <p className="scheduling-card-subhead">Seg a Sáb, das 9h às 20h</p>
                </div>
            </section>

            <Footer />
        </>
    );
}