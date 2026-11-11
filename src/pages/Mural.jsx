import Recado from "../components/Recado";

//2 recebe a lista de mensagens
//funcao para excluir mensagens
function Mural({ recados, remover }) {
  return (
    <main>
      <h1>Mural de Recados da Turma Aprender & Crescer 2026</h1>

      <p>
        Confira todas as mensagens publicadas abaixo.
      </p>

      {recados.length === 0 ? (
        <p>Nenhum recado publicado ainda, o movimento ta fraco...</p>
      ) : (
        <ul
          style={{
            padding: 0,
            display: "grid",
            gap: "12px"
          }}
        >
          {/*3 sistema pega cada recado da caixa e coloca na tela
          o recado que está sendo mostrado naquele momento
          5 lista cada recado*/}
          {recados.map((recado) => (
            <Recado //identificador de cada recado
              key={recado.id}
              recado={recado}
              remover={remover}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default Mural;