import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
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
      <Header />
      <div className="flex gap-10 flex-wrap w-350 mx-auto">
        {filmes.map((filme) => {
          return (
            <article
              key={filme.id}
              className="bg-gray-800 text-white p-5 rounded-2xl flex flex-col gap-4 items-center justify-center w-50"
            >
              <strong className="text-sm text-center">{filme.title}</strong>
              <img
                className="w-35 h-50"
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}/`}
                alt={filme.title}
              />
              <Link
                to={`filmes/${filme.id}`}
                className="bg-gray-700 h-8 w-full flex justify-center items-center rounded-sm"
              >
                Detalhes
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
