import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function Filme() {
  let params = useParams();
  const [filme, setFilme] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api(`movie/${params.filmeId}`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          language: "PT-BR",
          page: 1,
        },
      })
        .then((response) => {
          setFilme(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("FILME NOT FOUND");
        });
    }
    loadFilme();
  }, []);

  if (loading) {
    return <div className="w-full h-full bg-red-500"></div>;
  }

  return (
    <div>
      <Header />
      <div className="text-white w-160 mx-auto flex flex-col items-center gap-3">
        <h1 className="text-2xl">{filme.title}</h1>
        <img
          className="w-150"
          src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}/`}
          alt={filme.title}
        />
        <p className="w-150 text-sm">{filme.overview}</p>
        <button
  
          className="bg-green-600 h-12 w-150 flex justify-center items-center rounded-sm my-5"
        >
          Adicionar a Lista
        </button>
      </div>
    </div>
  );
}
