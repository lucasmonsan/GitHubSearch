import { useEffect, useState } from "react";
import styled from "styled-components";
import { Player } from '@lottiefiles/react-lottie-player';
import { HeaderBox, Div } from "../styles/containers";
import { Title1, Title2 } from "../styles/texts";
import { BtnOption } from "./BtnOption";
import { BtnSearch } from "./BtnSearch";

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
export const Header = () => {  
  const [searchMode, setSearchMode] = useState(true);
  const [searching, setSearching] = useState(false);
  const [textInput, setTextInput] = useState("");
  
  useEffect(() => {
    const auxLogo = document.getElementById("Logo");
    const auxInput = document.getElementById("Input");
    const auxHeader = document.getElementById("HeaderBox");
    
    if (searching) {
      auxLogo.style.opacity = "0";
      auxInput.style.opacity = "0";

      setTimeout(() => {
        auxHeader.style.borderRadius = "0 0 1em 1em";
        auxHeader.style.height = "80px";
        auxHeader.style.paddingBottom = "0";
        auxHeader.style.top = "0"  
        auxLogo.style.width = "280px";
        auxInput.style.width = "420px";      
      },500);

      setTimeout(() => {
        auxHeader.style.flexDirection = "row";
      },1000);

      setTimeout(() => {
        auxLogo.style.opacity = "1";
        auxInput.style.opacity = "1"; 
      },1250);
    }
  },[searching])
  
  return (
    <HeaderBox id="HeaderBox">
      <Div id="Logo">
        <Title1>GitHub</Title1>
        <Player autoplay loop src="https://assets4.lottiefiles.com/packages/lf20_5EI9XwtboP.json" style={{ height: "3.5em"}}/>
        <Title2>Search</Title2>
      </Div>
      
      <Div id="Input" gap="0.25em">
        <BtnOption searchMode={searchMode} setSearchMode={setSearchMode}/>        
        <Input placeholder={searchMode ? "Search username" : "Search repository"} value={textInput} onChange={e => setTextInput(e.target.value)}/>
        <BtnSearch searching={searching} setSearching={setSearching}/>
      </Div>
    </HeaderBox>
  )
}
