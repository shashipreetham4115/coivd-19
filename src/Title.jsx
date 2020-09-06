import React from "react";
import styles from './App.module.css'; 


const Title = () => {

   
    return (
        <h1 className={styles.title}>C<img src={ require('./covid5.png') } className={styles.imgs} alt="O"/>VID-19</h1>
    )
}

export default Title;