import "./BodyScrollable.css";

export default function BodyScrollable({ children }) {

    return (
        <div className="body-scrollable">
            {children}
        </div>
    );
}