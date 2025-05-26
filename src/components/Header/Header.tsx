import React, { useState } from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { CgYoutube } from "react-icons/cg";
import { FiTwitter } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

import styles from './header.module.css'



const Header:React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <>
    <section className={styles['header-section']}>

        {/*Top Bar */}
    <article className={styles['header-ad']}>
        <div className={styles['header-contacts']} >
            <span><MdOutlinePhone /></span> 
            <span>(225) 555-0118</span>
            <span><BsEnvelope /></span>
            <span>michelle.rivers@example.com</span>
        </div>

        <div className={styles['promo-message']}>
            <p>Follow us and get a chance to win 80% off </p>
        </div>

        <div className={styles['social-icons']}>
            
                <span>Follow us :</span>
                <AiOutlineInstagram />
                <CiFacebook />
                <CgYoutube />
                <FiTwitter />
                
            
        </div>
    </article>


        {/*Main Header*/}
    <article className={styles['header']} >
        
        <div className={styles['logo']}>
            <p>Bandage</p>
        </div>

        {/* Hamburger for mobile */}
        <div className={styles['mobile-menu-icon']} onClick={() => setMenuOpen(!menuOpen)} >
            {menuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} /> }
        </div>


        <nav className={`${styles['header-menu']} ${menuOpen ? styles['show-menu'] : ''}`} >
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Pages</p>
        </nav>

        <div className={styles['header-actions']}>
            <span><MdOutlinePerson /></span>
            <p>Login/Register</p>
            
                <span><IoIosSearch /></span>
                <span><MdOutlineShoppingCart /></span>
                <span><IoMdHeartEmpty /></span>
            
            
        </div>
        
    </article>

    </section>
    </>
  )
}

export default Header