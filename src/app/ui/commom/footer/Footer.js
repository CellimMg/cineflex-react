import "./Footer.css";

export default function Footer({ posterURL, title, day }) {
    return (
        <div className="footer">
            <div className="footer-img"><img src={posterURL} alt="Poster do filme" /></div>
            <span>{title}<br />{day}</span>
        </div>
    );
}