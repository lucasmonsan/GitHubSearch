import styled from "styled-components";

export const HomeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
export const HeaderBox = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 100%;
  height: 192px;
  padding-bottom: 0.5em;
  background-color: #272a30;
`
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.gap};
  width: min(80vw, 640px);
`
export const Svg = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(15vw, 100%);
  max-width: 40px;
  height: 40px;
  padding: ${props => props.padding};
  font-size: min(7vw, ${props => props.fontSize});
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
  color: ${props => props.color || "white"};
`