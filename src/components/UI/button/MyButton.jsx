import React from "react";
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props}
        className={classes.myBtn} 
        // style={{backgroundColor: 'black', border:'1px solid'}}
        >
           {children}
        </button>
    );
};

export default MyButton