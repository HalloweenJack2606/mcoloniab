import React from "react";
import Header from "../../components/header/header";
import PageTitle from "../../components/page_title/page_title";
import styles from "../about/about.module.css";


export default function Bamang() {

    const openGit = () => {
        window.open("https://github.com/HalloweenJack2606/Bamtang", "_blank");
    }

    const openDrive = () => {
        window.open("https://drive.google.com/file/d/1nk5ZQuuBjU-x_NDipXOD88ZLnfc1Npv7/view?usp=sharing", "_blank");
    }

    return (
        <div>
            <Header/>
            <PageTitle title={'bamtang'}/>

            <div style={{margin: "0 5rem"}}>
                <div className={styles.textContainer} style={{
                    fontSize: '1.2rem',
                    textAlign: 'left'
                }}>
                    Hola cree esta página porque en el formulario no había una sección para adjuntar mis proyectos, en caso
                    sea por github, el link es el siguiente:
                </div>
                <div style={{backgroundColor: "#FFF", cursor: "pointer", padding: "1rem 0"}} role={'button'} onClick={openGit}>https://github.com/HalloweenJack2606/Bamtang</div>

                <div className={styles.textContainer} style={{
                    fontSize: '1.2rem',
                    textAlign: 'left'
                }}>
                    Contiente 5 ramas una para cada proyecto del examen, también un leeme con información. Subí un zip con los 5 proyectos a Drive, recomiendo usar
                    ese ya que tienen las soluciones de VS2019 probadas junto con un archivo BAT para generarlas con premake.
                </div>
                <div style={{backgroundColor: "#FFF", cursor: "pointer", padding: "1rem 0"}} role={'button'} onClick={openDrive}>https://drive.google.com/file/d/1nk5ZQuuBjU-x_NDipXOD88ZLnfc1Npv7/view?usp=sharing</div>
                <div className={styles.textContainer} style={{
                    fontSize: '1.2rem',
                    textAlign: 'left'
                }}>
                    Pueden encontrar más información sobre mí en la sección de "about" de está página y más información sobre my experiencia en la sección de "experience".
                    <br/><br/>
                    Mis correos de contacto son: mcoloniab18@gmail.com o contact@mcoloniab.com
                    <br/>
                    Mi teléfono de contacto es: +51 992333533
                    <br/><br/>
                    Espero les guste mi perfil y gracias por considerarme!
                    <br/><br/><br/>
                    psdt.
                    <br/>
                    Me gustaría hacer una demo de proyectos que he trabajado solo como mi motor de juegos o editor.
                    <br/><br/>
                    La estructura los proyectos del examen es similar a la que suelo trabajar con mis juegos indie, en
                    caso hubiera algún problema con los proyectos (lo cual dudo) por favor contactarme.
                </div>
            </div>
        </div>
    )
}