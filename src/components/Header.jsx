import React from "react";
import styles from './App.module.css';


const Header = () => {
return (
    
    <div className={styles.header}>
    <h1 className={styles.title}>C<img src={require('./covid.png')} className={styles.imgs} alt="O" />VID-19</h1>
    </div>
)
}

export default Header;