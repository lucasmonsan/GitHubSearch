import styled from "styled-components";

export const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
export const HeaderBox = styled.header`
  z-index: 5;
  top: calc(50% - 96px);
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
  box-shadow: 0 0 0 #000000;
  transition: all 1s ease-in-out;
`
export const ResultBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6,1fr);
  justify-content: center;
  align-items: flex-start;
  gap: 0.5em;
  width: 100%;
  height: fit-content;
  max-width: 1440px;
  padding: 0.5em 1em;
  margin-top: 5em;

  @media (max-width: 1340px) {grid-template-columns: repeat(5,1fr)}
  @media (max-width: 1110px) {grid-template-columns: repeat(4,1fr)}
  @media (max-width: 830px) {grid-template-columns: repeat(3,1fr)}
  @media (max-width: 570px) {grid-template-columns: repeat(2,1fr)}
`
export const ProfileBox = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 214px;
  border-radius: 8px;
  background-color: white;

  @media (max-width: 400px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`
export const RepoBox = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 214px;
  border-radius: 8px;
  background-color: white;
`
export const LanguagesBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.25em;
  width: 100%;
  height: 100%;
  padding: 0 0.25em 0.5em 0.25em;
  font-size: 1.25rem;
`
export const Div = styled.div`
  z-index: ${props => props.zIndex || 1};
  position: ${props => props.position};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.gap};
  width: ${props => props.width || "100%"};
  margin: 0;
  opacity: ${props => props.opacity || 1};
  transition: all 0.75s ease-in-out;
`
export const Svg = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || "min(15vw, 100%)"};
  max-width: ${props => props.maxWidth || "40px"};
  height: ${props => props.height || "40px"};
  min-height: ${props => props.minHeight} ;
  padding: ${props => props.padding};
  font-size: min(7vw, ${props => props.fontSize});
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
  color: ${props => props.color || "white"};
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;  
`