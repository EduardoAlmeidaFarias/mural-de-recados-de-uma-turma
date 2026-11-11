import { Link } from "react-router-dom";
import estilos from "./Menu.module.css";

function Menu() {
  return (
    <nav className={estilos.menu}>
      <Link to="/">Mural de recados</Link>

      <Link to="/novo">Tem Recado ai? Digite ele Aqui!!!</Link>
    </nav>
  );
}

export default Menu;