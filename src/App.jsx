import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";

import Mural from "./pages/Mural";
import NovoRecado from "./pages/NovoRecado";
import EditarRecado from "./pages/EditarRecado";
import NaoEncontrada from "./pages/NaoEncontrada";

function App() { //cria a lista de recados
  const [recados, setRecados] = useState(() => {
    try { //6 procura os recados que ja estavam guardados 
      const dados = localStorage.getItem("recados");

      return dados ? JSON.parse(dados) : [];
    } catch {
      return [];
    }
  });

  //e a leitura acontece na inicializacao do estado
  useEffect(() => {//observa quando a lista muda
    localStorage.setItem( //guarda os dados
      "recados", //nome da gaveta onde guardamos
      JSON.stringify(recados)//transforma a li em tx para conseguir guardar
    );
  }, [recados]);

  //pega essas informações e coloca 
  //um novo recado dentro da lista
  function criar(dados) {
    const novoRecado = {
      id: Date.now(),
      autor: dados.autor,
      mensagem: dados.mensagem,
      data: new Date().toLocaleDateString("pt-BR")
    };

    setRecados((atuais) => [
      ...atuais,
      novoRecado
    ]);
  }

  //encontra o recado pelo n identificação e 
  //troca as informações antigas pelas novas
  function editar(id, dados) {
    setRecados((atuais) =>
      atuais.map((recado) =>
        recado.id === Number(id)
          ? { ...recado, ...dados }
          : recado
      )
    );
  }

  function remover(id) {
    const confirmar = window.confirm(
      "Deseja realmente excluir este recado?"
    );

    //percorre a lista e mantem somente os recados 
    //que nao possuem aquele n de identificacao
    if (confirmar) {
      setRecados((atuais) =>
        atuais.filter(
          (recado) => recado.id !== id
        )
      );
    }
  }

  //sao 4 rotas incluindo a pagina de erro
  return (
    <>
      <Menu />
      <Routes>
        <Route //mural de recados
          path="/"
          element={
            <Mural
              recados={recados}
              remover={remover}
            />
          }
        />

        <Route //cadastro de recado
          path="/novo"
          element={
            <NovoRecado criar={criar} />
          }
        />

        <Route //edicao de recado
          path="/editar/:id"
          element={
            <EditarRecado
              recados={recados}
              editar={editar}
            />
          }
        />

        <Route //pagina de erro
          path="*"
          element={<NaoEncontrada />}
        />
      </Routes>
    </>
  );
}

export default App;