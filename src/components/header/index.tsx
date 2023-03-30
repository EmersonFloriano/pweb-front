import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.container}>
        <span>
          <Link to={"/"} className={styles.link}>
            Início
          </Link>
        </span>
        <nav>
          <ul>
            <li>
              <Link to={"/funcionario"} className={styles.link}>
                Funcionário
              </Link>
            </li>
            <li>
              <Link to={"/produto"} className={styles.link}>
                Produto
              </Link>
            </li>
            <li>
              <Link to={"/cliente"} className={styles.link}>
                Cliente
              </Link>
            </li>
            <li>
              <Link to={"/venda"} className={styles.link}>
                Venda
              </Link>
            </li>
            <li>
              <Link to={"/usuario"} className={styles.link}>
                Usuário
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
