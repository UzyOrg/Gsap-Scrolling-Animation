'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  useEffect(()=>{
    (async () =>{
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  },[])
  return (
    <main className={styles.intro}>
      <div className={styles.backgroundImage}>
          <Image 
          src={'/images/galaxy3.jpeg'}
          fill={true}
          alt="background image"
          />
      </div>
      <div className={styles.introContainer}>
        <div data-scroll data-scroll-speed="0.3" className={styles.introImage}>
          
        <Image 
          src={'/images/galaxy2.jpg'}
          fill={true}
          alt="background image"
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">Great Scroll</h1>
      </div>
    </main>
  )
}
