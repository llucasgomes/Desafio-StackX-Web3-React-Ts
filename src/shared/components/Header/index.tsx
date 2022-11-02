import { ContainerHeader, ContainerLogo } from "./styled";
import Logo from "../../../assets/images/image1.png";

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <img src={Logo} alt="Logo StackX" />
      </ContainerLogo>
    </ContainerHeader>
  );
};
