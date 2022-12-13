import { useContext, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { HeaderBox, Div } from "../styles/containers";
import { Title1, Title2, Input } from "../styles/elements";
import { BtnOption } from "./BtnOption";
import { BtnSearch } from "./BtnSearch";
import axios from "axios";
import { Context } from "../Context";

export const Header = () => {
  const {setRepos, setProfile, setShowResult} = useContext(Context);  
  const [searchMode, setSearchMode] = useState(true);
  const [textInput, setTextInput] = useState("");
  
  function Searching () {
    setShowResult(false);
    
    if (textInput.length === 0) {
      searchMode ? alert("Digite o username") : alert("Digite o nome do repositório");
    } else if (textInput.length < 5 && searchMode) {
      alert("Digite um username com pelo menos 5 caracteres");
    } else if (searchMode) {
      const auxLogo = document.getElementById("Logo");
      const auxInput = document.getElementById("Input");
      const auxHeader = document.getElementById("HeaderBox");
      const auxLoading = document.getElementById("Loading");
      const auxTitle1 = document.getElementById("Title1");
      const auxTitle2 = document.getElementById("Title2");
      
      auxLoading.style.opacity = "1";
      auxLogo.style.opacity = "0";
      auxInput.style.opacity = "0";
      
      axios.get(`https://api.github.com/users/${textInput}`)
      .then(profileRes => {
        setTimeout(() => {
          setProfile(profileRes.data);        
          axios.get(`https://api.github.com/users/${textInput}/repos`).then(res => setRepos(res.data))
        },1000)
        
        setTimeout(() => {
          auxLoading.style.opacity = "0";
          
          auxHeader.style.top = "0";
          auxHeader.style.flexDirection = "row";
          auxHeader.style.height = "80px";
          auxHeader.style.padding = "0 0.75em";
          auxHeader.style.borderRadius = "0.5em";
          auxHeader.style.boxShadow = "0 0 0.5em #000000";
          
          auxLogo.style.width = "fit-content";
          auxInput.style.width = "fit-content";
          
          if ((window.innerWidth <= 600) && (window.innerWidth > 540)) {
            auxTitle1.style.fontSize = "min(4.5vw, 1.75rem)";
            auxTitle2.style.fontSize = "min(4.5vw, 1.75rem)";
          } else if ((window.innerWidth <= 540) && (window.innerWidth >= 320)) {            
            auxTitle1.style.display = "none";
            auxTitle2.style.display = "none";            
            setTimeout(() => {auxHeader.style.justifyContent = "space-between"},1000)
          } else if (window.innerWidth < 319) {
            auxLogo.style.display = "none";
            auxHeader.style.height = "64px";
          }
          
          setTimeout(() => {
            setShowResult(true);
            auxLogo.style.opacity = "1";
            auxInput.style.opacity = "1";
          },1000)
        },1000);
      })
      .catch(profileErr => {
        console.log("Erro - " + profileErr);
      })
    }
  }
  
  return (
    <HeaderBox id="HeaderBox">
      <Div id="Logo">
        <Title1 id="Title1">GitHub</Title1>
        <Player id="Icon" autoplay loop src="https://assets4.lottiefiles.com/packages/lf20_5EI9XwtboP.json" style={{ minWidth:"44px", height: "3.5em" }}/>
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
