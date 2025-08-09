// src/components/Categorias/Categorias.jsx
import estilos from "./Categorias.module.css";

import icone1 from "../../assets/img/entrada.png";
import icone2 from "../../assets/img/massa.png";
import icone3 from "../../assets/img/carne.png";
import icone4 from "../../assets/img/bebidas.png";
import icone5 from "../../assets/img/salada.png";
import icone6 from "../../assets/img/sobremesa.png";

export default function Categorias({ handleFiltro, botaoClicado }) {
    const categorias = [
        { nome: "Entradas", icone: icone1 },
        { nome: "Massas", icone: icone2 },
        { nome: "Carnes", icone: icone3 },
        { nome: "Bebidas", icone: icone4 },
        { nome: "Saladas", icone: icone5 },
        { nome: "Sobremesas", icone: icone6 },
    ];

    return (
        <section className={estilos.secao_categorias}>
            <div className={estilos.container_botoes}>
                {categorias.map(({ nome, icone }) => (
                    <button
                        key={nome}
                        className={
                            botaoClicado === nome
                                ? estilos.acenderBtn
                                : estilos.apagarBtn
                        }
                        onClick={() => handleFiltro(nome)}
                    >
                        <img
                            className={estilos.icone}
                            src={icone}
                            alt={`Ícone ${nome}`}
                        />
                        <span>{nome}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}
