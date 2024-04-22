import { INoticias, obtenerNoticias } from "./fakeRest";

const GET_TIME = (news: INoticias) => {
  const ahora = new Date();
  const minutosTranscurridos = Math.floor(
    ahora.getTime() - news.fecha.getTime() / 60000
  );
  return minutosTranscurridos;
};

const NORMALIZE_TITLE = (news: INoticias) => {
  return news.titulo
    .split(" ")
    .map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
};

const NORMALIZE_NEWS_DATA = async () => {
  const GET_NEWS = await obtenerNoticias();
  const NORMALIZE_DATA = GET_NEWS.map((news) => {
    const minElapsed = GET_TIME(news);
    const titulo = NORMALIZE_TITLE(news);
    return {
      id: news.id,
      titulo,
      descripcion: news.descripcion,
      fecha: `Hace ${minElapsed} minutos`,
      esPremium: news.esPremium,
      imagen: news.imagen,
      descripcionCorta: news.descripcion.substring(0, 100),
    };
  });
  return NORMALIZE_DATA;
};

export const GET_NEWS = NORMALIZE_NEWS_DATA();