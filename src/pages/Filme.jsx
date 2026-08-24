import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

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
      .catch(()=> {
        console.log("FILME NOT FOUND")
      })
    }
    loadFilme();
  }, []);

  if (loading) {
    return <div className="w-full h-full bg-red-500"></div>;
  }

  return (
    <div>
      <center>
        <h1>Nome do filme: {filme.title}</h1>
        <img
          className="w-50 h-70"
          src={`https://image.tmdb.org/t/p/original/${filme.poster_path}/`}
          alt={filme.title}
        />
      </center>
      <hr />
      <p>Descrição do filme: {filme.overview}</p>
    </div>
  );
}
