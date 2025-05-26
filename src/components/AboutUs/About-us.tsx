import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import styles from './aboutus.module.css'

const AboutUs = () => {
  return (
    <section className={styles['about-us-section']}>
        <div  className={styles['about-us-container']}>
            <div  className={styles['about-us-text']}>
                <h2>What they say about us</h2>
                <img src='/User1.png'/>
                
                <div className={styles['stars']}>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />


                </div>


                <p>slate helps you see how many more days you need to work
                    to reach your financial goal
                </p>
                

                <h5>Regina Miles</h5>
                <span >Designer</span>
            </div>
            <div className={styles['about-us-img']}>
                <div style={{gap: "10px", display:"flex"}}>
                    <img src='/aboutimg1.png' />
                    <img src='/aboutimg2.png'/>
                    <img src='/aboutimg1.png' />
                </div>

                <div style={{gap: "10px", display:"flex"}}>
                    <img src='/aboutimg1.png' />
                    <img src='/aboutimg2.png'/>
                    <img src='/aboutimg1.png' />
                </div>
                <div style={{gap: "10px", display:"flex"}}>
                    <img src='/aboutimg1.png' />
                    <img src='/aboutimg2.png'/>
                    <img src='/aboutimg1.png' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs