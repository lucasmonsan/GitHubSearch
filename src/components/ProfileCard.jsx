import { useEffect } from "react"
import { Div, ImgContainer, ProfileBox } from "../styles/containers"
import { Img, Strong } from "../styles/elements"

export const ProfileCard = ({ profile }) => {  
  return (
    <ProfileBox>
      <ImgContainer>
        <Img src={profile.avatar_url}/>
      </ImgContainer>
      
      <Strong padding="0.15em 0.25em 0 0.2em" fontSize="1.25rem">
        {profile.name}
      </Strong>
      
      <Strong padding="0 0.3em" fontWeight="600" fontSize="0.9rem">
        @{profile.login}
      </Strong>
      
      <Strong padding="0.25em 0.35em 0.5em 0.35em" fontWeight="500" fontSize="0.75rem">
        {profile.bio}
      </Strong>
    </ProfileBox>
  )
}