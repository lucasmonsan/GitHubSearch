import { useState } from 'react'

import { HomeBox } from '../styles/containers'
import { Header } from '../components/Header'

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <HomeBox>
      <Header/>
    </HomeBox>
  )
}