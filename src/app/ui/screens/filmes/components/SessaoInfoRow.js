import Button from "../../../commom/button/Button";
import "./SessaoInfoRow.css";

export default function SessaoInfoRow({ showTimes, date, weekday, id }) {
    return (
        <div className="sessao-info-row">
            <div className="weekday">
                <span>{weekday} - {date}</span>
            </div>
            <div className="times">
                {showTimes.map(showTime => <Button text={showTime.name} id={id} />)}
            </div>
        </div>
    );
}