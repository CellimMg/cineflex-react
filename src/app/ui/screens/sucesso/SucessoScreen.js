import Screen from "../../commom/Screen";
import { Link, useLocation } from "react-router-dom";
import "./SucessoScreen.css";
export default function SucessoScreen() {




    const state = useLocation();

    console.log(state);


    return (
        <Screen title={"Pedido feito com sucesso!"}>
            <div className="bloco-info">
                <div className="bloco-info-title">
                    <span>Filme e sessão</span>
                </div>
                <div className="bloco-info-info">
                    <span>{state.state.title}</span>
                    <span>{state.state.day}</span>
                </div>
            </div>
            <div className="bloco-info">
                <div className="bloco-info-title">
                    <span>Ingressos</span>
                </div>
                <div className="bloco-info-info">
                    {state.state.ids.map(assento => <span>Assento {assento}</span>)}
                </div>
            </div>
            <div className="bloco-info">
                <div className="bloco-info-title">
                    <span>Comprador</span>
                </div>
                <div className="bloco-info-info">
                    <span>Nome: {state.state.name}</span>
                    <span>CPF: {state.state.cpf}</span>
                </div>
            </div>
            <Link to="/" className="button" style={{ textDecoration: "none", margin: "auto" }}><span>Voltar pra Home</span></Link>
        </Screen>
    );
}