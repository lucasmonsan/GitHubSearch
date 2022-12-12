import { useContext } from 'react'
import { Context } from '../Context'
import { ResultBox } from "../styles/containers";
import { ProfileCard } from "./ProfileCard";
import { RepoCard } from './RepoCard';

export const Results = () => {
  const {repos, profile} = useContext(Context);
  
  return (
    <ResultBox>
      <ProfileCard profile={profile}/>
      {repos.map(repo => <RepoCard key={repo.id} repo={repo}/>)}
      {console.log(repos)}
    </ResultBox>
  )
}