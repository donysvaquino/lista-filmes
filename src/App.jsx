import { useEffect, useState } from "react";
import api from "./services/api";

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
    <div>
      {filmes.map((filme) => {
        return (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}/`}
              alt={filme.title}
            />
          </article>
        );
      })}
    </div>
  );
}
