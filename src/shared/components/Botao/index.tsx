import { IProps } from "../../../types";
import { ContainerButton } from "./styled";

export const Botao = ({ image, text, languages }: IProps) => {
  
    return (
      <>
        <ContainerButton  onClick={()=> languages(text)}>
          <img src={image} alt="brasil" />
          <p>{ text}</p>
        </ContainerButton>
      </>
    )
  };
  