import styled from "styled-components";

export const Input = styled.input`
outline: none;
width: min(80vw, 560px);
height: 40px;
padding: 0 0.25em;
font-size: min(6vw, 1.25rem);
text-align: center;
border: none;
background-color: white;
color: #2b2d42;
`
export const Title1 = styled.h1`
  line-height: 100%;
  padding: 0 0.25em;
  font-size: min(9vw, 2rem);
  font-weight: 600;
  color: white;
`
export const Title2 = styled.h2`
  line-height: 100%;
  padding: 0 0.25em;
  font-size: min(9vw, 2rem);
  font-weight: 300;
  color: white;
`
export const Img = styled.img`
  width: 264px;
`
export const Strong = styled.strong`
  width: 100%;
  padding: ${props => props.padding || "0 4px"};
  line-height: 100%;
  text-align: ${props => props.textAlign};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: #272a30;
`