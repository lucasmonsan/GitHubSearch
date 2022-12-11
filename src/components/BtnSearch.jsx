import { Svg } from "../styles/containers"
import { RiSearch2Line } from "react-icons/ri";

export const BtnSearch = ({ searching, setSearching }) => {
  return (
    <Svg radius="0 8px 8px 0" fontSize="1.5rem" bgColor="#05a8aa" onClick={e => searching ? setSearching(false) : setSearching(true)}>
      <RiSearch2Line/>
    </Svg>
  )
}