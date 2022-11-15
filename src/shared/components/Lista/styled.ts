import styled from "styled-components";

export const ContainerList = styled.div`
  width: 53rem;
  height: 13rem;
  background: #27272a;
  border: 2px solid #9d4b00;
  border-radius: 8px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  padding: 3rem;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding: 0 2rem;
    flex-wrap: wrap;
    list-style: none;

    li {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.87);
      margin: 0 1rem;
      padding-left: 1rem;
    }
  }
`;
