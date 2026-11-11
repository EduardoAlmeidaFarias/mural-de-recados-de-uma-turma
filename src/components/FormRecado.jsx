import { useState } from "react";
import estilos from "./FormRecado.module.css";

//4 useState e formulário controlado
//funcao para salvar o recado
//informacoes que serao colocadas no formulario
function FormRecado({ salvar, inicial = {} }) {
  const [autor, setAutor] = useState(inicial.autor || "");
  const [mensagem, setMensagem] = useState(
    inicial.mensagem || ""
  );//aqui estamos guardando autor e mensagem

  const [erro, setErro] = useState("");

  function enviar(event) {
    event.preventDefault();

    if (!autor.trim() || !mensagem.trim()) {
      setErro("Preencha todos os campos!");
      return;
    }

    salvar({
      autor: autor.trim(),
      mensagem: mensagem.trim()
    });
  }

  return (
    <form className={estilos.form} onSubmit={enviar}>
      <label>Seu Nome:</label>

      <input //4 campo do autor //campo da mensagem
        type="text"
        value={autor}//mostra o nome do autor guardado
        //percebe quando você digita
        onChange={(e) => setAutor(e.target.value)}
        //atualiza o nome guardado
        placeholder="Digite seu nome..."
      />

      <label>Mensagem:</label>

      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Escreva seu recado..."
        rows="5"
      />

      {erro && (
        <p className={estilos.erro}>{erro}</p>
      )}

      <button type="submit">
        Salvar recado.
      </button>
    </form>
  );
}

export default FormRecado;