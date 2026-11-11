import { Link } from "react-router-dom";

function NaoEncontrada() {
  return (
    <main>
      <h1>Página não encontrada</h1>

      <p>O endereço digitado não existe.</p>

      <Link to="/">
        Voltar para o mural
      </Link>
    </main>
  );
}

export default NaoEncontrada;