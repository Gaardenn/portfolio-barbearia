import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Lightbox.css";
import { faArrowLeft, faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export function Lightbox({ images, opened, setOpened, currentImage, setCurrentImage }) {
    const touchStartX = useRef(0);

    function handleTouchStart(e) {
        touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        const endX = e.changedTouches[0].clientX;

        const distance = endX - touchStartX.current;

        if (distance < -80) {
            if (currentImage === images.length - 1) {
                setCurrentImage(0);
            } else {
                setCurrentImage(currentImage + 1);
            }
        } else if (distance > 80) {
            if (currentImage === 0) {
                setCurrentImage(images.length - 1);
            } else {
                setCurrentImage(currentImage - 1);
            }
        }
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";

        if (!opened) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpened(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [opened]);

    return (
        <section onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onClick={() => setOpened(false)} className="lightbox">
            <FontAwesomeIcon icon={faX} className="lightbox-icon" onClick={() => setOpened(false)} />
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={images[currentImage]} className="lightbox-img" />
                <div className="lightbox-navigation">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={() => { if (currentImage === 0) { setCurrentImage(images.length - 1); } else { setCurrentImage(currentImage - 1); } }} className="lightbox-navigation-button" />
                    <FontAwesomeIcon icon={faArrowRight} onClick={() => { if (currentImage === images.length - 1) { setCurrentImage(0); } else { setCurrentImage(currentImage + 1); } }} className="lightbox-navigation-button" />
                </div>
            </div>
        </section>
    );
}