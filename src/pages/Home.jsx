import { useState } from 'react'

import { HomeBox } from '../styles/containers'

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <HomeBox>
      Lucas Monsan
    </HomeBox>
  )
}