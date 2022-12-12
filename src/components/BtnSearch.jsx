import { Svg } from "../styles/containers"
import { RiSearch2Line } from "react-icons/ri";

export const BtnSearch = ({ Searching }) => {
  return (
    <Svg radius="0 8px 8px 0" fontSize="1.5rem" bgColor="#05a8aa" onClick={Searching}>
      <RiSearch2Line/>
    </Svg>
  )
}