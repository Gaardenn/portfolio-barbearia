import { faQuoteRight, faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/TestimonialCard.css";

export function TestimonialCard({ testimonial }) {
    return (
        <div className="testimonials-card">
            <FontAwesomeIcon icon={faQuoteRight} className="testimonials-card-quotation" />
            <div className="testimonials-card-rating">
                {Array.from({ length: testimonial.nota }).map((n, index) => (
                    <FontAwesomeIcon key={index + " testimonial-rating-full"} icon={faSolidStar} />
                ))}
                {Array.from({ length: 5 - testimonial.nota }).map((n, index) => (
                    <FontAwesomeIcon key={index + " testimonial-rating-outline"} icon={faRegularStar} />
                ))}
            </div>
            <p className="testimonials-card-description">{testimonial.descricao}</p>
            <div className="testimonials-card-user">
                <p className="testimonials-card-user-icon">{(testimonial.nome).split(" ").map(word => word[0].toUpperCase()).join("")}</p>
                <div>
                    <p className="testimonials-card-user-name">{testimonial.nome}</p>
                    <p className="testimonials-card-user-since">Cliente desde {testimonial.desde}</p>
                </div>
            </div>
        </div>
    );
}