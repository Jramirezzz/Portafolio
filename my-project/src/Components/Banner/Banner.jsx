import "./Banner.css";

export default function Banner({ title, description, buttons, image }) {
    return (
        <div className="banner-container">
            <img src={image} alt="Foto de perfil" className="banner-image" />
            <div className="banner-content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}
