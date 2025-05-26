import React from 'react'
import styles from './problems.module.css'


const Problems = () => {
  return (
    <section className={styles['problems-section']}>
        <div  className={styles['problems-container']}>
            <h6>Designing Better Experience</h6>
            <h1>Problems trying to resolve <br/> the conflict between</h1>
            <p style={{color: "#23856D", fontWeight: "700",fontSize: "24px", lineHeight: "32px" }}>$16.48</p>
            <p>Problems trying to resolve the conflict between the two majo realms of classical physics</p>
            <button>ADD YOUR CALL TO ACTION</button>

        </div>
    </section>
  )
}

export default Problems