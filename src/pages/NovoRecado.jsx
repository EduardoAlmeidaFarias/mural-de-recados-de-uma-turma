import { useNavigate } from "react-router-dom";
import FormRecado from "../components/FormRecado";

function NovoRecado({ criar }) {
  const navegar = useNavigate();

  function salvar(dados) {
    criar(dados);
    navegar("/");
  }

  return (
    <main>
      <h1>Novo Recado, Fala Aí...</h1>

      <p>Preencha todos os campos para publicar sua mensagem.</p>

      <FormRecado salvar={salvar} />
    </main>
  );
}

export default NovoRecado;