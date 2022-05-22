import "./Assento.css";

export default function Assento({ selected, numero, ontap }) {

    function getColorBg() {
        if (selected) return "#8DD7CF";
        return "#FBE192";
    }

    function getColorBorder() {
        if (selected) return "#1AAE9E";
        return "#F7C52B";
    }


    return (
        <div onClick={() => ontap(numero)} style={{ backgroundColor: selected != null ? getColorBg() : null, borderColor: selected != null ? getColorBorder() : null }} className="assento">
            <span>{numero}</span>
        </div>
    );
}