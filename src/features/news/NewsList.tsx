import React, { useEffect, useState } from "react";
import { ListaNoticias as List } from "./styled";
import NEWS_CARD from "./NewsCard";
import { INoticiasNormalizadas } from "./Noticias";
import { GET_NEWS } from "./fetchNews";
import Modal from "./Modal";

const NEW_LIST = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const handleModal = (news: INoticiasNormalizadas | null) => {
    setModal(news);
  };

  useEffect(() => {
    const obtenerInformacion = async () => {
      const data = await GET_NEWS;
      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  return (
    <List>
      {noticias.map((news) => (
        <NEWS_CARD key={news.id} news={news} setModal={handleModal}></NEWS_CARD>
      ))}
      {modal ? <Modal modal={modal} setModal={handleModal} /> : null}
    </List>
  );
};

export default NEW_LIST;