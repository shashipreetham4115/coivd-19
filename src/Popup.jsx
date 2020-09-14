import React from 'react';  
import styles from "./App.module.css"; 

const Popup = ({popupcontent,onclickfunction}) => {  

return (  
<div id="popupanimation" className={styles.popup}>  
<div className={styles.popup_inner}> 
<div><img className={styles.h1} onClick={onclickfunction} alt="hai" src="https://img.icons8.com/flat_round/40/000000/delete-sign.png"/><br/>{popupcontent}</div>
</div>  
</div>  
);  
}  


export default Popup;