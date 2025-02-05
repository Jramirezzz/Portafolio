import "./Cards.css";

export default function Cards({title, description}) {
    return (
        <div className="cards-container">
            <h3> {title} </h3>
            <p> {description} </p>
        </div>
    )
}