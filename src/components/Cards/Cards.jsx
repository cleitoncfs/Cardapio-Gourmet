// src/components/Cards/Cards.jsx
import estilos from "./Cards.module.css";

export default function Cards({ produto, onClick }) {
    return (
        <div className={estilos.container} onClick={onClick}>
            <figure>
                <img src={produto.imagem} alt={produto.nome} />
            </figure>
            <div className={estilos.container_informacoes}>
                <div>
                    <h3>{produto.nome}</h3>
                    <small>{produto.categoria}</small>
                    <p>{produto.descricao}</p>
                </div>
                <div>
                    <span>
                        {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(produto.preco)}
                    </span>
                </div>
            </div>
        </div>
    );
}
