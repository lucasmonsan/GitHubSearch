import { useContext, useState } from 'react'
import { HomeBox } from '../styles/containers'
import { Header } from '../components/Header'
import { Context } from '../Context'
import { ProfileCard } from '../components/ProfileCard'

export const Home = () => {
  const context = useContext(Context);
  const repositories = context.repos;
  const [count, setCount] = useState(0)

  return (
    <HomeBox>
      <Header/>
      {repositories.map((repo) => (
        <ProfileCard key={repo.id} repo={repo}/>
      ))}
    </HomeBox>
  )
}