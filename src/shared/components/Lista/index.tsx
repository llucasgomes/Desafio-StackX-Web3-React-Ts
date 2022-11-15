import { ITechs } from "../../../types"
import { ContainerList } from "./styled"



export const TechList = () => {
    const techologies = ["Javascript","React",'Vue js','Tailwind CSS','Styled Components','Saas',"Node",'TypeScript',"Angular","Java"]

    return (
        <ContainerList>
            <ul>
                {techologies.map((item, index) => (<li>{item}</li>))}
            </ul>
            
        </ContainerList>

    )
}