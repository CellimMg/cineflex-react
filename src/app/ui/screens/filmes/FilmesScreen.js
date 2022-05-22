import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Screen from "../../commom/Screen";
import SessaoInfoRow from "./components/SessaoInfoRow";
import Footer from "../../commom/footer/Footer";
import BodyScrollable from "../../commom/body-scrollable/BodyScrollable";

export default function FilmesScreen() {

    const [sessao, setSessoes] = useState({ days: [] });
    const { id } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
        promise.then(response => {
            setSessoes({ ...response.data });
        });

        promise.catch(error => console.log(error));
    }, []);

    return (
        <Screen title={"Selecione o horário"}>
            <BodyScrollable>
                {sessao.days.map(day => <SessaoInfoRow showTimes={day.showtimes} date={day.date} weekday={day.weekday} />)}
            </BodyScrollable>
            <Footer posterURL={sessao.posterURL} title={sessao.title} />
        </Screen>
    );
}
