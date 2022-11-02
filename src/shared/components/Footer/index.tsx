import { Botao } from "../Botao"
import { ContainerFooter } from "./styled"
import brazil from "../../../assets/images/brazil-flag.png"
import spain from "../../../assets/images/spain-flag.png"
import english from "../../../assets/images/united-states-flag.png"
import { IProps } from "../../../types"



export const Footer = ({ languages}:IProps) => {
    return(
        <ContainerFooter>
            <Botao image={brazil} text="Brasil" languages={ languages} />
            <Botao image={ english}  text="Inglês" languages={ languages}/>
            <Botao image={ spain}  text="Espanhol" languages={ languages}/>
        </ContainerFooter>

    )
}