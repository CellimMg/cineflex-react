import { useState, useEffect } from "react";
import axios from "axios";
import BodyScrollable from "../../commom/body-scrollable/BodyScrollable";
import Footer from "../../commom/footer/Footer";
import Screen from "../../commom/Screen";
import Assento from "./components/assento/Assento";
import Button from "../../commom/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import LoadingBody from "../../commom/loading-body/LoadingBody"
import "./SessaoScreen.css";
import styledComponents from "styled-components";

export default function SessaoScreen() {

    const [session, setSession] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [selecteds, setSelecteds] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    //campos do form
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    function onClickAssento(numero) {
        if (selecteds.includes(numero)) {
            selecteds.splice(selecteds.indexOf(numero), 1);
            setSelecteds([...selecteds]);
        } else {
            if (session.seats.filter(seat => seat.name == numero)[0].isAvailable) {
                selecteds.push(numero);
                setSelecteds([...selecteds]);
            } else {
                alert("Este assento já está reservado. Por favor, selecione outro.");
            }
        }
    }

    function getSeatStatus(isAvailable, numero) {
        if (selecteds.includes(numero)) {
            return true;
        } else {
            if (!selecteds.includes(numero) && !isAvailable) {
                return false;
            }
            return null;
        }
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`);
        promise.then(response => {
            setSession(response.data);
            setLoaded(true);
        });
        promise.catch(error => console.log(error));
    }, []);

    function getBody() {
        if (loaded) {
            return (
                <>
                    <BodyScrollable>
                        <div className="assentos">
                            {session.seats.map(seat => <Assento ontap={onClickAssento} numero={seat.name} selected={getSeatStatus(seat.isAvailable, seat.name)} />)}
                        </div>
                        <div className="legenda">
                            <div className="legenda-tile">
                                <SelectedSeatExample />
                                <span>Selecionado</span>
                            </div>
                            <div className="legenda-tile">
                                <AvailableSeatExample />
                                <span>Disponível</span>
                            </div>
                            <div className="legenda-tile">
                                <NotAvailableSeatExample />
                                <span>Ocupado</span>
                            </div>
                        </div>
                        <div className="form">
                            <form onSubmit={onSubmitForm}>
                                <span>Nome do comprador:</span>
                                <input type={"text"} value={nome} onChange={e => setNome(e.target.value)} placeholder={"Digite seu Nome..."} />
                                <span>CPF do comprador:</span>
                                <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder={"Digite seu CPF..."} />
                                <button type="submit">Reservar assento(s)</button>
                            </form>
                        </div>
                    </BodyScrollable>
                    <Footer title={session.movie.title} posterURL={session.movie.posterURL} day={`${session.day.weekday} - ${session.day.date}`} />
                </>
            );
        } else {
            return <LoadingBody />;
        }
    }


    function onSubmitForm(event) {
        event.preventDefault();
        if (nome == "") {
            alert("Informe o nome!");
        } else if (cpf == "") {
            alert("Informe o CPF!");
        } else if (selecteds.length == 0) {
            alert("Selecione os assentos!");
        } else {
            const body = {
                ids: [...selecteds],
                name: nome,
                cpf: cpf
            };
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body);
            promise.then(response => {

                const data = {
                    state: {
                        ...body,
                        title: session.movie.title,
                        day: `${session.day.weekday} - ${session.day.date}`
                    }
                }

                navigate("/sucesso", data);
            });
            promise.catch(error => console.log(error));
        }
    }

    return (
        <Screen title={"Selecione o(s) assento(s)"}>
            {getBody()};
        </Screen>
    );
}

const AvailableSeatExample = styledComponents.div`
    margin-bottom: 10px;
    width: 25px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
`;

const NotAvailableSeatExample = styledComponents.div`
    margin-bottom: 10px;   
    width: 25px;
    height: 25px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 12px;
`;

const SelectedSeatExample = styledComponents.div`
    margin-bottom: 10px;
    width: 25px;
    height: 25px;
    background: #8DD7CF;
    border: 1px solid #45BDB0;
    border-radius: 12px;
`;
