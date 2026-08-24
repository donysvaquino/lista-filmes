import { useState } from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  const [lista, setLista] = useState(
    JSON.parse(localStorage.getItem("@ListaFilmes")) || [],
  );

  function removerFilme(id) {
    const newList = lista.filter((filme) => filme.id !== id);
    localStorage.setItem("@ListaFilmes", JSON.stringify(newList));
    setLista(newList);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-white text-2xl font-bold">Sua lista de filmes</h1>
      <ul className="text-white flex flex-col gap-5">
        {lista.map((filme) => (
          <li key={filme.id} className="flex w-180 justify-between">
            {filme.title}
            <div className="botoes flex gap-10">
              <Link className="text-blue-300" to={`/filmes/${filme.id}`}>
                Detalhes
              </Link>
              <button
                className="text-red-400"
                onClick={() => removerFilme(filme.id)}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
