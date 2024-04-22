import { ContenedorNoticias, TituloNoticias } from "./styled";
import NEW_LIST from "./NewsList";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <NEW_LIST />
    </ContenedorNoticias>
  );
};

export default Noticias;