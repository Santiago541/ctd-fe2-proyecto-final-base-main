import React from "react";
import { INoticiasNormalizadas } from "./Noticias";
import {
  BotonLectura,
  DescripcionTarjetaNoticia,
  FechaTarjetaNoticia,
  ImagenTarjetaNoticia,
  TarjetaNoticia,
  TituloTarjetaNoticia,
} from "./styled";

interface newsCardProps {
  news: INoticiasNormalizadas;
  setModal: (news: INoticiasNormalizadas) => void;
}

const NEWS_CARD = ({ news, setModal }: newsCardProps) => {
  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={news.imagen} />
      <TituloTarjetaNoticia>{news.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{news.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {news.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura
        data-testid={"showMoreButton" + news.id}
        onClick={() => setModal(news)}
      >
        Ver más
      </BotonLectura>
    </TarjetaNoticia>
  );
};

export default NEWS_CARD;