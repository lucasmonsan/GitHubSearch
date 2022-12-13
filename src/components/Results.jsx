import { useContext, useEffect } from 'react'
import { Context } from '../Context'
import { ResultBox } from "../styles/containers";
import { ProfileCard } from "./ProfileCard";
import { RepoCard } from './RepoCard';

export const Results = () => {
  const {repos, profile, showResult} = useContext(Context);

  useEffect(() => {
    const auxResult = document.getElementById("ResultBox");

    if (showResult) {
      auxResult.style.opacity = "1";
    } else {
      auxResult.style.opacity = "0";
    }

    if (window.innerWidth < 320) {
      auxResult.style.marginTop = "64px";
    }
  },[showResult]);
  
  return (
    <ResultBox id='ResultBox'>
      <ProfileCard profile={profile}/>
      {repos.map(repo => <RepoCard key={repo.id} repo={repo}/>)}
    </ResultBox>
  )
}