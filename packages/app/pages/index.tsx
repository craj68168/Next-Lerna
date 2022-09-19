import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Button} from "@tdotcode/components"
import { useState } from 'react'
const Home: NextPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.container}>
      <h1>{count}</h1>
      <Button onClick={()=>setCount((prev)=>++prev)}/>
    </div>
  )
}

export default Home
