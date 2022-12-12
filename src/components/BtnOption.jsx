import { Svg } from "../styles/containers"
import { RiGitRepositoryLine, RiAtLine } from "react-icons/ri";

export const BtnOption = ({ searchMode, setSearchMode }) => {
  return (
    <Svg radius="8px 0 0 8px" fontSize="1.5rem" bgColor="#9348b8" onClick={e => setSearchMode(!searchMode)}>
      {searchMode ? <RiAtLine/> : <RiGitRepositoryLine/>}
    </Svg>
  )
}