import { ProfileCardBox } from "../styles/containers"

export const ProfileCard = ({ repo }) => {
  return (
    <ProfileCardBox>
      <h2>{repo.title}</h2>
    </ProfileCardBox>
  )
}