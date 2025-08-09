import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                © {new Date().getFullYear()} Cardápio Gourmet – Todos os
                direitos reservados
            </p>

            <p className={styles.credits}>
                Desenvolvido por{" "}
                <a
                    href="https://portfolio-cleiton.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                    aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                >
                    <span>Cleiton Santos</span>
                    <FaExternalLinkAlt className={styles.linkIcon} />
                </a>
            </p>
        </footer>
    );
};

export default Footer;
