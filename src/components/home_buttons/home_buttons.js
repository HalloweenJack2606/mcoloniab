import React from "react";
import styles from './home_buttons.module.css';
import {useNavigate} from "react-router-dom";

export default function HomeButton({children, url}) {
    const navigate = useNavigate();
    return (
        <div className={styles.container} onClick={() => {
            if(url) navigate(url);
        }}>
            <div style={{
                fontSize: '3rem',
                textAlign: 'center',
                width: "100%",
                fontWeight: 600,
                userSelect: "none"
            }}>{children}</div>
        </div>
    )
}