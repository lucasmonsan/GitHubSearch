import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  width: 100%;
  max-width: 560px;
  height: fit-content;
  max-height: 40px;
  padding: 0.4em;
  font-size: min(4.975vw, 1.25rem);
  text-align: center;
  border: none;
  background-color: white;
  color: #2b2d42;
`
export const Title1 = styled.h1`
  line-height: 100%;
  padding-right: 0.25em;
  font-size: min(9vw, 2rem);
  font-weight: 600;
  color: white;
`
export const Title2 = styled.h2`
  line-height: 100%;
  padding-left: 0.25em;
  font-size: min(9vw, 2rem);
  font-weight: 300;
  color: white;
`
export const Img = styled.img`
  width: 100%;
`
export const Strong = styled.strong`
  width: 100%;
  padding: ${props => props.padding || "0 4px"};
  line-height: 100%;
  text-align: ${props => props.textAlign};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: #272a30;

  @media (max-width: 540px) {
    font-size: min(${props => props.fontSizeMobile}, ${props => props.fontSize});
  }
`
export const A = styled.a`
  z-index: 5;
  cursor: pointer;
  text-decoration: none;
`