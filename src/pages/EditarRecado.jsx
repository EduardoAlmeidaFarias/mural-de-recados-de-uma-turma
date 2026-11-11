import { useNavigate, useParams } from "react-router-dom";
import FormRecado from "../components/FormRecado";

function EditarRecado({ recados, editar }) {
  const { id } = useParams();
  const navegar = useNavigate();

  const recado = recados.find(
    (item) => item.id === Number(id)
  );

  if (!recado) {
    return (
      <main>
        <h1>Recado não encontrado</h1>
      </main>
    );
  }

  function salvar(dados) {
    editar(id, dados);
    navegar("/");
  }

  return (
    <main>
      <h1>Editar Recado</h1>

      <FormRecado
        salvar={salvar}
        inicial={recado}
      />
    </main>
  );
}

export default EditarRecado;