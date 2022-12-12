import { RepoBox, Svg } from "../styles/containers"
import { Strong } from "../styles/elements"
import { RiGithubFill } from "react-icons/ri"
import { Languages } from "./Languages"

export const RepoCard = ({ repo }) => {
  return (
    <RepoBox>
      <Svg width="100%" maxWidth="100%" minHeight="96px" fontSize="3rem" bgColor="pink">
        <RiGithubFill/>
      </Svg>
      
      <Strong textAlign="center" padding="0.5em 0.25em" fontSize="1.1rem">
        {repo.name}
      </Strong>
      
      <Strong textAlign="center" padding="0.25em 0.5em" fontWeight="500" fontSize="0.8rem">
        {repo.description}
      </Strong>

      <Languages repo={repo}/>
    </RepoBox>
  )
}