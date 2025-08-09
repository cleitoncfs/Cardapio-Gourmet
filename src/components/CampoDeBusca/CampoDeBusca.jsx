// src/components/CampoDeBusca/CampoDeBusca.jsx
import estilos from "./CampoDeBusca.module.css";
import Lupa from "../../assets/img/lupa.png";

export default function CampoDeBusca({ textoBuscaDigitado, handleBusca }) {
    return (
        <div className={estilos.container}>
            <img className={estilos.icone} src={Lupa} alt="ícone" />
            <input
                type="text"
                value={textoBuscaDigitado}
                onChange={(event) => handleBusca(event.target.value)}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    );
}
