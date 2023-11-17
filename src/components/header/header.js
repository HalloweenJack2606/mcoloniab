import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from './header.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        {title: 'about', url: '/about'},
        {title: 'work', url: '/work'},
        {title: 'projects', url: '/projects', blocked: true},
        {title: 'blog', url: '/blog', blocked: true},
        {title: 'articles', url: '/articles', blocked: true},
    ]

    return (
        <div className={styles.outerContainer}>
            <div className={`${styles.headerContainer}`}>
                <div className={`${styles.headerItem} ${styles.hide}`} onClick={() => navigate('/')}>
                    <div>marcelo colonia</div>
                </div>
                <div className={styles.headerItem}>
                    <div onMouseLeave={() => setMenuOpen(false)} onMouseEnter={() => setMenuOpen(true)} style={{display: "flex", alignItems: 'center'}}>
                        <div style={{paddingRight: '0.2rem'}}>menu</div>
                        <FontAwesomeIcon icon={faChevronDown} size={'2xs'}/>
                    </div>
                    {menuOpen &&
                        <div onMouseLeave={() => setMenuOpen(false)} onMouseEnter={() => setMenuOpen(true)}>
                            <div className={`${styles.show} ${styles.menuItem}`} onClick={() => navigate('/')}>Home</div>
                        {menuItems?.map((item, index) => (
                            <div key={index} className={styles.menuItem} onClick={() => {
                                if(!item.blocked) {
                                    navigate(item.url);
                                }
                            }}>
                                {item.blocked ?
                                    <s style={{cursor: "not-allowed"}}>{item.title}</s>
                                    :
                                    <div>{item.title}</div>
                                }
                            </div>
                        ))}
                        </div>
                    }
                </div>
                <div className={styles.headerItem} onClick={() => {
                    window.open('https://github.com/HalloweenJack2606', '_blank')
                }}>
                    <div>git</div>
                </div>
            </div>
        </div>
    )
}