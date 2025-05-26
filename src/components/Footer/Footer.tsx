import React from 'react'
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import styles from './footer.module.css'

const Footer = () => {
  return (
    <section className={styles['footer-section']}>
        <div  className={styles['footer-container']}>
            <div className={styles['footer-header']}>
                <h1>Bandage</h1>
                <div className={styles['social-icons']} >
                    <p><a href="#"><CiFacebook/></a></p>
                    <p><a href="#"><AiOutlineInstagram/></a></p>
                    <p><a href="#"><FiTwitter/></a></p>
                 </div>
            </div>

            <div className={styles['footer-text']} style={{display: 'flex', gap: '35px'}}>
                <div className={styles['footer-col']}>
                    <h4>Company Info</h4>
                    <Link to="#">About us</Link>
          <Link to="#">Carrier</Link>
          <Link to="#">We are hiring</Link>
          <Link to="#">Blog</Link>

                </div>

                <div  className={styles['footer-col']}>
                    <h4>Legal</h4>
                    <Link to="#">About us</Link>
          <Link to="#">Carrier</Link>
          <Link to="#">We are hiring</Link>
          <Link to="#">Blog</Link>

                </div>

                <div className={styles['footer-col']}>
                    <h4>Features</h4>
                  

          <Link to="#">Business Marketing</Link>
          <Link to="#">User Analytic</Link>
          <Link to="#">Live Chat</Link>
          <Link to="#">Unlimited Support</Link>


                </div>

                <div  className={styles['footer-col']} >
                    <h4>Resources</h4>
                    <Link to="#">About us</Link>
          <Link to="#">Carrier</Link>
          <Link to="#">We are hiring</Link>
          <Link to="#">Blog</Link>

                </div>

                <div className={styles['footer-col']}>
                        <h4>Get In Touch</h4>
                        <form className={styles['subscribe-form']}>
                            <input type="email" placeholder="Your Email" />
                            <button type="submit">Subscribe</button>
                         </form>
                        <p  className={styles['lorem-text']} >Lore imp sum dolor Amit</p>
                </div>

              

            </div>

            <div className={styles['footer-bottom']}>
                <p>Made With Love By Finland All Right Reserved</p>
            </div>
        </div>
    </section>
  )
}

export default Footer