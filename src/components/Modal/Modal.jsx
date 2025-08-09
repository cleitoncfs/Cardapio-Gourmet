// src/components/Modal/Modal.jsx
import estilos from "./Modal.module.css";
import { detalhesProdutos } from "../../data/detalhes_produtos";

function Modal({ prato, onClose }) {
    if (!prato) return null;

    const info = detalhesProdutos[prato.nome];

    return (
        <div className={estilos.overlay} onClick={onClose}>
            <div className={estilos.modal} onClick={(e) => e.stopPropagation()}>
                <button className={estilos.fechar} onClick={onClose}>
                    ×
                </button>
                <div className={estilos.conteudo}>
                    <img
                        src={prato.imagem}
                        alt={prato.nome}
                        className={estilos.imagem}
                    />
                    <div className={estilos.textos}>
                        <h2>{prato.nome}</h2>
                        <p>
                            <strong>Descrição:</strong> {prato.descricao}
                        </p>
                        <p>
                            <strong>Preço:</strong> R$ {prato.preco.toFixed(2)}
                        </p>

                        {info && (
                            <>
                                <p>
                                    <strong>Ingredientes:</strong>
                                </p>
                                <ul>
                                    {info.ingredientes.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <p>
                                    <strong>Harmonização:</strong>{" "}
                                    {info.harmonizacao}
                                </p>
                                <p>
                                    <strong>Curiosidade:</strong>{" "}
                                    {info.curiosidade}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
