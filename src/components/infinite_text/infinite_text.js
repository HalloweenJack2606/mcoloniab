import React, { useEffect, useRef } from "react";
import styles from './infinite_text.module.css';

function InfiniteText({ children, inverse }) {
    const scrollContentRef = useRef(null);

    useEffect(() => {
        const handleAnimationEnd = () => {
            if (scrollContentRef.current) {
                // Reset the scroll position to keep the animation continuous
                scrollContentRef.current.scrollLeft = 0;
            }
        };

        if (scrollContentRef.current) {
            // Add animation end event listener
            scrollContentRef.current.addEventListener("animationiteration", handleAnimationEnd);
        }

        return () => {
            if (scrollContentRef.current) {
                // Remove event listener on component unmount
                scrollContentRef.current.removeEventListener("animationiteration", handleAnimationEnd);
            }
        };
    }, []);

    return (
        <div>
            <div ref={scrollContentRef} className={`${inverse ? styles.infiniteAnimationRight : styles.infiniteAnimation} d-flex`}>
                {Array.from({ length: 50 }, (_, index) => (
                    <div key={index} className={styles.text}>{children}</div>
                ))}
            </div>
        </div>
    );
}

function HomeInfinite() {
    return (
        <div>
            <InfiniteText inverse={true}>
                <div style={{
                    backgroundColor: '#000',
                    color: '#f3dbdb',
                    padding: '0 1rem',
                    userSelect: "none"
                }}>Who is Marcelo Colonia?</div>
            </InfiniteText>
            <InfiniteText inverse={false}>
                <div style={{
                    backgroundColor: '#f3dbdb',
                    color: '#000',
                    padding: '1rem 1rem',
                    userSelect: "none",
                }}>¿Quién es Marcelo Colonia?</div>
            </InfiniteText>
            <InfiniteText inverse={true}>
                <div style={{
                    backgroundColor: '#000',
                    color: '#f3dbdb',
                    padding: '0 1rem',
                    userSelect: "none",
                }}>Wer ist Marcelo Colonia?</div>
            </InfiniteText>
        </div>
    )
}

export {
    InfiniteText,
    HomeInfinite
}