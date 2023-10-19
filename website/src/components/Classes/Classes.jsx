import React from 'react'
import styles from "./Classes.module.css"

const Classes = () => {
  return (
    <div className={styles.classesContainer}>
        <div className={styles.classesMain}>
            <p className={styles.classesTitle}>Our Classes</p>
        </div>
    </div>
  )
}

export default Classes