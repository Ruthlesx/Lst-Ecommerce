import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { VscBook } from "react-icons/vsc";
//import { Link} from "react-router-dom"
import styles from './services.module.css'

const Services: React.FC = () => {
  return (
    <section className={styles['services-section']}>
        <div  className={styles['services-container']}>

            <div className={styles['services-header']}>
                <h4>Featured Products</h4>
                <h2>The Best Services</h2>
                <p>Problems trying to resolve the conflict between </p>
            </div>

            <div className={styles['services-item']}>
                <div>
                <span><FaBookReader style={{color: '#23A6F0', fontSize:"50px"}} /></span>
                <h1>Easy Wins</h1>
                <p>Get your best loookng smile now!</p>

                </div>

                <div className={styles['services-item-2']}>
                <span><VscBook style={{color: '#23A6F0', fontSize:"50px"}} /></span>
                <h1>Concrete</h1>
                <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>


                <div>
                <span><FaArrowTrendUp style={{color: '#23A6F0', fontSize:"50px"}} /></span>
                <h1>Hack Growth </h1>
                <p>Overcame any hurdle or any other problem.</p>
                </div>
            </div>


             
        </div>
    </section>
  )
}

export default Services