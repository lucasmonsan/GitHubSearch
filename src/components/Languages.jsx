import axios from "axios"
import { useEffect, useState } from "react"
import { LanguagesBox } from "../styles/containers"
import { SiJavascript, SiHtml5, SiCss3, SiKotlin, SiPython, SiJava, SiCplusplus, SiCsharp } from "react-icons/si"
import { SiGoland, SiTypescript, SiPhp, SiRuby, SiC, SiNixos, SiScala, SiRust, SiDart } from "react-icons/si"
import { SiSwift, SiLua } from "react-icons/si"

export const Languages = ({ repo }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios.get(repo.languages_url)
    .then(res => {
      setLanguages(res.data);
      console.log(languages)
    })
  },[])

  return (
    <LanguagesBox>
      {languages.JavaScript && <SiJavascript/>}
      {languages.HTML && <SiHtml5/>}
      {languages.CSS && <SiCss3/>}
      {languages.Kotlin && <SiKotlin/>}
    </LanguagesBox>
  )
}