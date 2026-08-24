import { useEffect, useState } from "react";
import api from "./services/api";
import { Link } from "react-router-dom";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 10));
    }

    loadFilmes();
  }, []);

  return (
    <div className="flex gap-30 flex-wrap">
      {filmes.map((filme) => {
        return (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img
              className="w-20 h-30"
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}/`}
              alt={filme.title}
            />
            <Link to={`filmes/${filme.id}`}> Ver Detalhes do filme</Link>
          </article>
        );
      })}
    </div>
  );
}
