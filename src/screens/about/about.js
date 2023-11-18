import React from "react";
import PageTitle from "../../components/page_title/page_title";
import styles from './about.module.css';
import HomeButton from "../../components/home_buttons/home_buttons";
import CoolButton from "../../components/cool_buttons/cool_buttons";
import Header from "../../components/header/header";

export default function About() {

    const about = [
        "My name is Marcelo Colonia, I'm a 22 year old Berlin & Lima -based game designer and programmer. I've had game development as my passion for as long as I can remember and have been studying coding since I was 13 years old.",
        "I've been doing Graphics Programming with OpenGL since 2017 and made a couple of 2D engines. On 2020 I launched a \"test demo\" for my engine on Steam called MaryPark St. Mainly to test if my engines were capable of making an actual game and not just cool things to put on my CV.",
        "Currently I work at Stracontech & My Industrial Data in Lima, Perú I'm directing a project for a 2D/3D and raytracing capable engine."
    ]

    const games = ["Elden Ring", "Earthbound", "The Witness", "Undertale", "Life is Strange", "Red Dead Redemption 2", "Portal 2", "Minecraft"]
    const artists = ["David Bowie", "Arctic Monkeys", "Kendrick Lamar", "Pink Floyd", "King Crimson", "Yes", "The Doors", "Charly García"]


    return (
        <div>
            <Header/>
            <PageTitle title={'about'}/>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                <div className={styles.aboutContainer}>
                    <div className={styles.leftContainer}>
                        <div className={styles.imageContainer}>
                            <img src={'/images/pp.jpg'} alt={'pp'} width="70%" style={{
                                backgroundColor: '#000',
                                padding: '0.2rem'
                            }}/>
                        </div>
                        <div className={styles.textContainer}>
                            {/*About*/}
                            <b style={{fontSize: '1.2rem'}}>Marcelo Colonia</b><br/>
                            <b style={{fontSize: '0.8rem'}}>programmer &amp; game designer</b><br/>
                            <b style={{fontSize: '0.8rem'}}>Stracon Technologies, My Industrial Data</b>

                            <div className={styles.textContainer} style={{margin: '1rem 0', display: 'flex', justifyContent: 'center'}}>
                                <div style={{backgroundColor: '#fff', margin: '0.1rem, 0', padding: '1px 0', width: '100%'}}/>
                            </div>

                            {/*Lang*/}
                            <div style={{marginBottom: '1rem'}}><b>CONTACT</b></div>
                            <div>mcoloniab18@gmail.com</div>
                            <div>+51 992 333 533 (Perú)</div>
                            <div>+49 176 60897786 (Deutschland)</div>
                            <div>mcoloniab.com</div>
                            <div>Berlin, DE & Lima, PE</div>

                            {/*Contact*/}
                            <div style={{margin: '1rem 0'}}><b>SPOKEN LANGUAGES</b></div>
                            <div>Spanish (Native)</div>
                            <div>English (Certified C1 in 2017)</div>
                            <div>German (Certified B2 in 2020)</div>

                            {/*Skills Web*/}
                            <div style={{margin: '1rem 0'}}><b>SKILLS WEB</b></div>
                            <div>HTML/CSS</div>
                            <div>Django/Python</div>
                            <div>React/React Native</div>
                            <div>JavaScript/PHP</div>
                            <div>Laravel/Vue</div>
                            <div>Flutter</div>
                            <div>Solidity</div>
                            <div>AWS, Git, Trello</div>

                            {/*Skills Desktop*/}
                            <div style={{margin: '1rem 0'}}><b>SKILLS DESKTOP</b></div>
                            <div>C++</div>
                            <div>C#</div>
                            <div>Java</div>
                            <div>Unity &amp; Unreal 5</div>
                            <div>GLSL</div>
                            <div>Python</div>
                            <div>OpenGL &amp; Vulkan</div>
                            <div>Steam API integration</div>
                            <div>2D &amp; 3D Workflows</div>
                            <div>Desktop, Mobile &amp; VR</div>
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <div>
                        {about?.map((text, index) => (
                            <div key={index} className={styles.textContainer} style={{
                                marginBottom: "1rem",
                                fontSize: '1.2rem',
                                textAlign: 'left'
                            }}>
                                {text}
                            </div>
                        ))}
                        </div>
                        <div className={styles.textContainer} style={{
                            display: "flex",
                            textAlign: 'left',
                        }}>
                            <div style={{flexBasis: '50%'}}>
                                <b>My favorite games:</b>
                                {games?.map((game, index) => (
                                    <div key={index}>- {game}</div>
                                ))}
                            </div>

                            <div>
                                <b>My favorite artists:</b>
                                {artists?.map((artist, index) => (
                                    <div key={index}>- {artist}</div>
                                ))}
                            </div>
                        </div>

                        <div className={`${styles.textContainer} ${styles.hide}`} style={{
                            padding: '2rem 0.4rem',
                            marginTop: '1rem',
                        }}>
                            <CoolButton url={'/experience'}>
                                <div>Click to see my work!</div>
                            </CoolButton>
                            <div style={{margin: '2rem 0'}}/>
                            <CoolButton reverse url={'/projects'}>
                                <div>Click to see my projects!</div>
                            </CoolButton>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}