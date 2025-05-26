import React from 'react';
import { Link } from 'react-router-dom';
import styles from './hero.module.css';




const Hero: React.FC = () => {

 

  return (
    <section className={styles['hero-section']}>
        <div className={styles['hero-container']}>

          {/*left Image*/}  
        <div className={`${styles['hero-left'] }  ${styles['relative-div']}`}>
          
           {/* <div className={styles['main-image']}> */}
              
              <img src="/funiture1.png" alt="furniture1" />

             
              
            {/*</div>*/}
          
        </div>


        <div className={styles['hero-right']}>

          {/*Top right image*/}
          <div className={styles['relative-div']}>
            
            
                
                <img src='/funiture2.png' alt='funiture2'  />
               
               <div className={styles['absolute-div']}>
                <h6>5 Items</h6>
                <h3>Furniture</h3>
                <Link to="#">Read More</Link>


               </div>
              
          

          </div>

          <div className={styles['bottom-right']}>
            <div className={styles['relative-div']}>
              {/*Bottom Right Images */}
              
                  
                  <img src="/funiture3.png" alt="funiture3" />
                  <div className={styles['absolute-div']}>
                  <h6>5 Items</h6>
                  <h3>Furniture</h3>
                 <Link to="#">Read More</Link>
                  </div>

                
            
            </div>
            
            <div className={styles['relative-div']}>
              
                
                 
                  <img src='/funiture4.png' alt="furniture4"  />
                  
                  <div className={styles['absolute-div']}>
                  <h6>5 Items</h6>
                  <h3>Furniture</h3>
                  <Link to="#">Read More</Link>
                  </div>
                
            
            </div>
        </div>



          </div>
        </div>
    </section>
  )
}

export default Hero