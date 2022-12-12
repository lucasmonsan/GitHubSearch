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
  grid-template-columns: repeat(5,1fr);
  justify-content: center;
  gap: 0.5em;
  padding: 0.5em 1em;
  margin-top: 5em;
`
export const ProfileBox = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 264px;
  height: 100%;
  max-height: 214px;
  border-radius: 8px;
  background-color: white;
`
export const RepoBox = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 264px;
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