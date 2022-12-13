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
  height: min(60vw,192px);
  padding: 0 0.75em 0.5em 0.75em;
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
  opacity: 0;
  transition: all 0.75s ease-in-out;

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
  transition: all 0.25s ease-in-out;

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
  transition: all 0.25s ease-in-out;
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
  padding: ${props => props.padding};
  opacity: ${props => props.opacity || 1};
  transition: all 0.75s ease-in-out;
`
export const Svg = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || "min(10vw, 100%)"};
  max-width: ${props => props.maxWidth || "40px"};
  height: ${props => props.height || "fit-content"};
  min-height: ${props => props.minHeight} ;
  padding: ${props => props.padding || "0.3335em"};
  font-size: min(6vw, ${props => props.fontSize});
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
  color: ${props => props.color || "white"};

  @media (max-width: 540px) {
    min-height: ${props => props.minHeightMobile};
  }
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;  
`