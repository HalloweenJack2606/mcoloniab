import React from "react";
import styles from './cool_buttons.module.css';
import {useNavigate} from "react-router-dom";

export default function CoolButton({children, url, reverse}) {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={`${styles.buttonContainer} ${reverse ? styles.reverseAnimation : styles.normalAnimation}`} onClick={() => {
                if(url) navigate(url);
            }}>
                {children}
            </div>
        </div>
    )
}