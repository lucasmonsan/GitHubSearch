import { RepoBox, Svg } from "../styles/containers"
import { Strong } from "../styles/elements"
import { RiGithubFill } from "react-icons/ri"
import { Languages } from "./Languages"

export const RepoCard = ({ repo }) => {
  return (
    <RepoBox>
      <Svg width="100%" maxWidth="100%" minHeight="76px" bgColor="pink" minHeightMobile="64px" style={{fontSize:"3rem"}}>
        <RiGithubFill/>
      </Svg>
      
      <Strong textAlign="center" padding="0.5em 0.25em 0 0.25em" fontSize="1.1rem" fontSizeMobile="4vw">
        {repo.name}
      </Strong>
      
      <Strong textAlign="center" padding="0.5em" fontWeight="500" fontSize="0.75rem" fontSizeMobile="3vw">
        {(repo.description !== null && repo.description.length > 90) && repo.description.slice(0,90)+"..."}
        {(repo.description !== null && repo.description.length <= 90) && repo.description.slice(0,90)}
      </Strong>
      
      <Languages repo={repo}/>
    </RepoBox>
  )
}