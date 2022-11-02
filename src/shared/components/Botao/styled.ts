import styled from "styled-components";

export const ContainerButton = styled.button`
  /* width: 11.3rem; */
  height: 3.1rem;
  background: #27272a;
  border-radius: 0.8rem;
  border: none;
  padding: 1.5rem;
  margin-left: 3rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
  p {
    font-size: 1.2rem;
    color: #ededed;
  }
`;
