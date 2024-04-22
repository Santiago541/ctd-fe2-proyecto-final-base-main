import React from "react";
import { INoticiasNormalizadas } from "./Noticias";
import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";

interface modalProps {
  modal: INoticiasNormalizadas;
  setModal: (news: INoticiasNormalizadas | null) => void;
}

const Modal = ({ setModal, modal }: modalProps) => {
  return (
    <>
      {modal.esPremium ? (
        <ContenedorModal>
          <TarjetaModal>
            <CloseButton onClick={() => setModal(null)}>
              <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
            <CotenedorTexto>
              <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
              <DescripcionModal>
                Suscríbete a nuestro newsletter y recibe noticias de nuestros
                personajes favoritos.
              </DescripcionModal>
              <BotonSuscribir
                onClick={() =>
                  setTimeout(() => {
                    alert("Suscrito!");
                    setModal(null);
                  }, 1000)
                }
              >
                Suscríbete
              </BotonSuscribir>
            </CotenedorTexto>
          </TarjetaModal>
        </ContenedorModal>
      ) : (
        <ContenedorModal>
          <TarjetaModal>
            <CloseButton onClick={() => setModal(null)}>
              <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={modal.imagen} alt="news-image" />
            <CotenedorTexto>
              <TarjetaModal>{modal.titulo}</TarjetaModal>
              <DescripcionModal>{modal.descripcion}</DescripcionModal>
            </CotenedorTexto>
          </TarjetaModal>
        </ContenedorModal>
      )}
    </>
  );
};

export default Modal;