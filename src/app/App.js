import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import HomeScreen from "./ui/screens/home/HomeScreen";
import FilmesScreen from "./ui/screens/filmes/FilmesScreen";
import SessaoScreen from "./ui/screens/sessao/SessaoScreen";
import SucessoScreen from "./ui/screens/sucesso/SucessoScreen";


export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/filmes/:id" element={<FilmesScreen />} />
                    <Route path="/sessao/:id" element={<SessaoScreen />} />
                    <Route path="/sucesso" element={<SucessoScreen />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}