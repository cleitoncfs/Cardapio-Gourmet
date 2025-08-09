import { useState } from "react";
import "./App.css";
import Banner from "./assets/img/banner.png";
import estilos from "./styles/page.module.css";

import {
    filtrarProdutos,
    buscarProduto,
    produtosEntradas,
} from "./services/servico";

import Cards from "./components/Cards/Cards.jsx";
import Categorias from "./components/Categorias/Categorias.jsx";
import CampoDeBusca from "./components/CampoDeBusca/CampoDeBusca.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Modal from "./components/Modal/Modal.jsx"; // 👈 Importação do Modal

function App() {
    const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
    const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
    const [botaoClicado, setBotaoClicado] = useState("Entradas");
    const [pratoSelecionado, setPratoSelecionado] = useState(null); // 👈 Estado do modal

    const handleBusca = (textoDigitado) => {
        setTextoBuscaDigitado(textoDigitado);
        if (textoDigitado.length >= 3) {
            setDadosFiltrados(buscarProduto(textoDigitado));
            setBotaoClicado("");
        }
    };

    const handleFiltro = (categoria) => {
        setTextoBuscaDigitado("");
        setDadosFiltrados(filtrarProdutos(categoria));
        setBotaoClicado(categoria);
    };

    return (
        <>
            <header className={estilos.topo}>
                <img src={Banner} alt="banner" />
                <div>
                    <h1>RESTAURANT</h1>
                    <p>
                        De pratos clássicos a criações surpreendentes, nosso
                        cardápio é um requinte de sabores refinados.
                    </p>
                </div>
            </header>

            <main className={estilos.container_principal}>
                <Categorias
                    handleFiltro={handleFiltro}
                    botaoClicado={botaoClicado}
                />
                <CampoDeBusca
                    textoBuscaDigitado={textoBuscaDigitado}
                    handleBusca={handleBusca}
                />
                <section className={estilos.secao_cards}>
                    <h2>Cardápio</h2>
                    <div className={estilos.container_cards}>
                        {dadosFiltrados.map((produto) => (
                            <Cards
                                key={produto.id}
                                produto={produto}
                                onClick={() => setPratoSelecionado(produto)} // 👈 Clique abre modal
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Modal
                prato={pratoSelecionado}
                onClose={() => setPratoSelecionado(null)}
            />

            <Footer />
        </>
    );
}

export default App;
