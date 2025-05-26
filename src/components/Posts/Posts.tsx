import React from 'react'
import { MdAccessAlarms } from "react-icons/md";

import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from './posts.module.css'


const Posts = () => {
  return (
    <section  className={styles['featured-post-section']}>
        <div className={styles['featured-post-div-container']}>
            
            <div className={styles['featured-post-header']}>
                <h6>Practice Advice</h6>
                <h1>Featured Posts</h1>
            </div>
            
            <div  className={styles['featured-post-item']}>

            <div className='featured-container'>
                    <div className={styles['featured-post-img']}>
                        <img src="featuredpost-img.png"/>
                        <p>NEW</p>
                    </div>

                    <div className={styles['featuredpost-card-container']}>
                        <div className={styles['featured-post-card']}>
                           
                             {/*<div style={{display: "flex", flexDirection:"row", gap: "10px"}}> */}
                             <div className={styles['featured-post-span']}>
                                <span>Google</span>
                                <span>Trending</span>
                                <span>New</span>
                            </div>

                            <h3>Loudest à la Madison #1 <br/>
                            (L'integral)</h3>

                            {/*<div style={{width: "350px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: ""  }}>   */}
                                <p>
                                    We focus on ergonomics and meeting 
                                    you where you work. It's only a <br />
                                    keystroke away.
                                </p>
                           {/* </div>*/} 

                            
                                <div className={styles['clock']}>
                                    <p><MdAccessAlarms style={{color: '#23A6F0'}}  /> 22 April 2021</p>
                                    <p><BsGraphUp style={{color: '#23856d'}}  /> 22 April 2021</p>
                                    
                                </div>

                               
                            

                            <Link to={"#"}>Learn More <MdOutlineKeyboardArrowRight />
                            </Link>

                        </div>

                    </div>
                </div>

                
                {/*<div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center" }}>*/}
                <div className='featured-container'>
                    <div className={styles['featured-post-img']}>
                        <img src="featuredpost-img.png"/>
                        <p>NEW</p>
                    </div>

                    <div className={styles['featuredpost-card-container']}>
                        <div className={styles['featured-post-card']}>
                           
                             {/*<div style={{display: "flex", flexDirection:"row", gap: "10px"}}> */}
                             <div className={styles['featured-post-span']}>
                                <span>Google</span>
                                <span>Trending</span>
                                <span>New</span>
                            </div>

                            <h3>Loudest à la Madison #1 <br/>
                            (L'integral)</h3>

                            {/*<div style={{width: "350px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: ""  }}>   */}
                                <p>
                                    We focus on ergonomics and meeting 
                                    you where you work. It's only a <br />
                                    keystroke away.
                                </p>
                           {/* </div>*/} 

                            
                                <div className={styles['clock']}>
                                    <p><MdAccessAlarms style={{color: '#23A6F0'}}  /> 22 April 2021</p>
                                    <p><BsGraphUp style={{color: '#23856d'}} /> 22 April 2021</p>
                                    
                                </div>

                               
                            

                            <Link to={"#"}>Learn More <MdOutlineKeyboardArrowRight />
                            </Link>

                        </div>

                    </div>
                </div>


                <div className='featured-container'>
                    <div className={styles['featured-post-img']}>
                        <img src="featuredpost-img.png"/>
                        <p>NEW</p>
                    </div>

                    <div className={styles['featuredpost-card-container']}>
                        <div className={styles['featured-post-card']}>
                           
                             {/*<div style={{display: "flex", flexDirection:"row", gap: "10px"}}> */}
                             <div className={styles['featured-post-span']}>
                                <span>Google</span>
                                <span>Trending</span>
                                <span>New</span>
                            </div>

                            <h3>Loudest à la Madison #1 <br/>
                            (L'integral)</h3>

                            {/*<div style={{width: "350px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: ""  }}>   */}
                                <p>
                                    We focus on ergonomics and meeting 
                                    you where you work. It's only a <br />
                                    keystroke away.
                                </p>
                           {/* </div>*/} 

                            
                                <div className={styles['clock']}>
                                    <p><MdAccessAlarms style={{color: '#23A6F0'}} /> 22 April 2021</p>
                                    <p><BsGraphUp style={{color: '#23856d'}}/> 22 April 2021</p>
                                    
                                </div>

                               
                            

                            <Link to={"#"}>Learn More <MdOutlineKeyboardArrowRight />
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Posts