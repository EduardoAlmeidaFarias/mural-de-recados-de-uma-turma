import { Link } from "react-router-dom";
import estilos from "./Recado.module.css";

//componentes proprios recebendo props
//recebe as informacos da mensagem
function Recado({ recado, remover }) {
  return (
    <li className={estilos.recado}>
      <h3>{recado.autor}</h3>

      <p>{recado.mensagem}</p>

      <small>
        Publicado em: {recado.data}
      </small>

      <div className={estilos.acoes}>
        <Link to={`/editar/${recado.id}`}>
          Editar
        </Link>
        {/*recebe uma funcao para excluir*/}
        <button onClick={() => remover(recado.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
}

export default Recado;