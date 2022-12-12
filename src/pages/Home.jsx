import { HomeBox, Div } from '../styles/containers'
import { Header } from '../components/Header'
import { Results } from '../components/Results'

export const Home = () => {
  return (
    <HomeBox>
      <Header/>       
      <Results/>
    </HomeBox>
  )
}