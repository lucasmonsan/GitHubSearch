import { useEffect, useState } from "react";
import styled from "styled-components";
import { Player } from '@lottiefiles/react-lottie-player';
import { HeaderBox, Div, Svg } from "../styles/containers";
import { Title1, Title2 } from "../styles/texts";
import { RiGitRepositoryLine, RiAtLine, RiSearch2Line } from "react-icons/ri";

export const Input = styled.input`
outline: none;
width: 100%;
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

  },[])

  return (
    <HeaderBox>
      <Div>
        <Title1>GitHub</Title1>
        <Title2>Search</Title2>
        <Player autoplay loop src="https://assets4.lottiefiles.com/packages/lf20_5EI9XwtboP.json" style={{ height: "3.5em"}}/>
      </Div>
      
      <Div gap="0.25em">
        <Svg radius="8px 0 0 8px" fontSize="1.5rem" bgColor="#9348b8" onClick={e => setSearchMode(!searchMode)}>
          {searchMode ? <RiAtLine/> : <RiGitRepositoryLine/>}
        </Svg>
        
        <Input placeholder={searchMode ? "Search username" : "Search repository"} value={textInput} onChange={e => setTextInput(e.target.value)}/>
        
        <Svg radius="0 8px 8px 0" fontSize="1.5rem" bgColor="#05a8aa" onClick={e => searching ? setSearching(false) : setSearching(true)}>
          <RiSearch2Line/>
        </Svg>
      </Div>
    </HeaderBox>
  )
}
