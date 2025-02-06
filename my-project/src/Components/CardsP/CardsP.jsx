import "./CardsP.css";

export default function CardsP({ title, description, buttons, link }) {
    return (
        <div className="cardp-container floating">
            <h3> {title} </h3>
            <p> {description} </p>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button>{buttons}</button>
            </a>
        </div>
    );
}
