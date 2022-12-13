import { useContext, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { HeaderBox, Div } from "../styles/containers";
import { Title1, Title2, Input } from "../styles/elements";
import { BtnOption } from "./BtnOption";
import { BtnSearch } from "./BtnSearch";
import axios from "axios";
import { Context } from "../Context";

export const Header = () => {
  const {setRepos, setProfile} = useContext(Context);  
  const [searchMode, setSearchMode] = useState(true);
  const [textInput, setTextInput] = useState("");
  
  function Searching () {
    const auxLogo = document.getElementById("Logo");
    const auxInput = document.getElementById("Input");
    const auxHeader = document.getElementById("HeaderBox");
    const auxLoading = document.getElementById("Loading");
    const auxTitle1 = document.getElementById("Title1");
    const auxTitle2 = document.getElementById("Title2");
    const auxIcon = document.getElementById("Icon");
    const auxRealyInput = document.getElementById("RealyInput");
    
    auxLogo.style.opacity = "0";
    auxInput.style.opacity = "0";
    auxLoading.style.opacity = "1";
    
    axios.get(`https://api.github.com/users/${textInput}`)
    .then(res => {
      setProfile(res.data);
    })
    
    axios.get(`https://api.github.com/users/${textInput}/repos`)
    .then(res => {
      setRepos(res.data);
      
      setTimeout(() => {
        auxHeader.style.flexDirection = "row";   
        auxHeader.style.borderRadius = "0 0 1em 1em";
        auxHeader.style.height = "80px";
        auxHeader.style.paddingBottom = "0";
        auxHeader.style.top = "0"
        auxHeader.style.boxShadow = "0 0 0.5em #000000";
        auxHeader.style.justifyContent = "space-between";
        auxHeader.style.gap = "0.5em";
        auxLogo.style.width = "290px";
        auxInput.style.width = "420px";
        auxLoading.style.opacity = "0";
        
        if (window.innerWidth <= 540) {
          auxHeader.style.height = "64px";
          auxLogo.style.justifyContent = "flex-start";
          auxLogo.style.marginLeft = "0.75em";
          auxLogo.style.height = "38px";
          auxInput.style.width = "100%";
          auxInput.style.justifyContent = "flex-end";
          auxInput.style.marginRight = "0.75em";
          auxTitle1.style.display = "none";
          auxTitle2.style.display = "none";
          auxIcon.style.left = "1em";
          auxIcon.style.minWidth = "40px";
          auxRealyInput.style.width = "min(48vw, 360px)";
        };
        
        setTimeout(() => {
          auxLogo.style.opacity = "1";
          auxInput.style.opacity = "1";
        },1000);
      },1500);
    })
  }
  
  return (
    <HeaderBox id="HeaderBox">
      <Div id="Logo">
        <Title1 id="Title1">GitHub</Title1>
        <Player id="Icon" autoplay loop src="https://assets4.lottiefiles.com/packages/lf20_5EI9XwtboP.json" style={{ height: "3.5em" }}/>
        <Title2 id="Title2">Search</Title2>
      </Div>
      
      <Div id="Loading" position="absolute" opacity="0" zIndex="0">
        <Player autoplay loop src="https://lottie.host/c55acdb0-2f7f-4734-a668-ee12b599ed39/bR2xZrKLDp.json" style={{height:"10em"}}/>
      </Div>
      
      <Div id="Input" gap="0.25em">
        <BtnOption searchMode={searchMode} setSearchMode={setSearchMode}/>        
        <Input id="RealyInput" placeholder={searchMode ? "Search username" : "Search repository"} value={textInput} onChange={e => setTextInput(e.target.value)}/>
        <BtnSearch Searching={Searching}/>
      </Div>
    </HeaderBox>
  )
}
