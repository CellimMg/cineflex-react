import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ text, id }) {
    return (
        <Link to={`/sessao/${id}`} style={{ textDecoration: "none" }} className="button">
            <span>{text}</span>
        </Link>
    );
}