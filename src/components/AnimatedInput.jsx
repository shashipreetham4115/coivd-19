import React, {useState, useEffect} from "react";


const AnimatedInput = ({placeholder: passedPlaceholder = "", ...passedProps}) => {
    const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [i, seti] = useState(0);
    useEffect(() => {
       
        const intr = setInterval(() => {
            setPlaceholder(passedPlaceholder[i].slice(0, placeholderIndex));
            if (placeholderIndex + 1 > passedPlaceholder[i].length+10) {
                setPlaceholderIndex(0)
                if(i<passedPlaceholder.length-1){
                seti(i+1);
                }
                else{
                    seti(0);
                }
            } else {
                setPlaceholderIndex(placeholderIndex + 1)
            }
            
        }, 150);
        return () => {
            clearInterval(intr)
             
             
        }
    },);
    return <input {...passedProps} placeholder={placeholder}/>
};

export default AnimatedInput