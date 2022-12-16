import React, { useEffect } from 'react'
import pp from '../images/pp.jpg';
import './Home.css';
import Separator from './Components/Separator';
import Header from './Components/Header';

export default function Home() {
    let games = [
        "Elden Ring",
        "Earthbound",
        "The Witness",
        "Undertale",
        "Life is Strange",
        "Red Dead Redemption 2",
        "Portal 2",
        "Minecraft",
    ];
    let artists = [
        "David Bowie",
        "Arctic Monkeys",
        "Kendrick Lamar",
        "Pink Floyd",
        "King Crimson",
        "Yes",
        "The Doors",
    ];
    let jobs = [
        {
            dates: "June 2020 - Today",
            place: "Company: E-Pask digital solutions",
            position: "Lead Programmer",
            tasks: [
                "Worked with diverse Web Frameworks",
                "Leaded development of advanced CRMs and ERPs",
                "Managed small teams of programmers",                
                "Developed effective workflows for tight schedules",
                "Started development of a VR Editor"
            ]
        },
        {
            dates: "June 2021 - December 2021",
            place: "Crypto Development",
            position: "Lead Programmer",
            tasks: [
                "Worked on the ERC20 contract",
                "Developed the backend for the Android & iPhone application",
            ]
        },
        {
            dates: "October 2020 - November 2020",
            place: "FLI!",
            position: "Freelance programmer",
            tasks: [
                "Bug fixing and Powerups",
                "Made with Unity",
                "3D dream-like flight simulator",
                "Published on the Apple App Store"
            ]
        },
        {
            dates: "January 2019 - June 2019",
            place: "Company: Bit2Bit Americas",
            position: "Internship",
            tasks: [
                "Worked with AWS and did some Alexa implementations",
                "Diverse research projects with Arduino",
                "Rust and OpenGL implementation",
            ]
        },
        {
            dates: "February 2017 - March 2018",
            place: "Company: Real Estate Group ProCity",
            position: "Freelance",
            tasks: [
                "Development of diverse .NET and C# applications for the accounting department.",
            ]
        },
    ];
    let projects = [
        {
            title: "Custom Graphics Engine Programming",
            tasks: [
                "Worked with both OpenGL and Vulkan API's",
                "Developed an Entity Component System (ECS)",
                "Multi-threaded texture loading (including compressed DXT formats)",
                "ImGui implementation",
                "Worked with complex math libraries",
                "GLFW window handling",
                "GLSL shading language",
                "2D physics",
            ]
        },
        {
            title: "MaryPark St.",
            tasks: [
                "Experimental and \"trippy\" 15 minute game",
                "2D tech demo made on a custom engine",
                "Published on Steam",
            ]
        },
        {
            title: "Voxel Game - Minecraft-like",
            tasks: [
                "Minecraft clone made without engines, using only pure C++ and OpenGl programming",
                "Infinite terrain generation using perlin noise",
                "Frustum Culling",
                "Chunk Batching System (16x256x16)",
                "Placing & Breaking blocks using 3D raycasting",
            ],
        },
        {
            title: "Minecraft Mod Development",
            tasks: [
                "Worked with online communities on Mods",
                "Development on Java",
            ]
        }
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) entry.target.classList.add("anim_show");
        });
    });

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.anim_hid');
        hiddenElements.forEach((el) => observer.observe(el));
    });

  return (
    <div id="home" className='my-5 py-5'>
        <Header/>
        <div className='info px-2 flex anim_hid mb-4'>
            <div className='me flex'>
                <img src={pp} width="70%"/>
                <div className='mt-3'>
                    <b className='name'>Marcelo Colonia</b><br/>
                    <b className='name_desc'>programmer &amp; game designer</b>
                </div>
            </div>
            <Separator/>
            <div>
                <div className='mb-3'>
                    <b>CONTACT</b>
                </div>
                <span>mcoloniab18@gmail.com</span><br/>
                <span>+51 992 333 533 (Perú)</span><br/>
                <span>+49 176 60897786 (Deutschland)</span><br/>
                <span>mcoloniab.com</span><br/>
                <span>Berlin, DE</span><br/>
                <span>(Currently in Lima, Perú)</span><br/>
            </div>
            <div>
                <div className='my-3'>
                    <b>SPOKEN LANGUAGES</b><br/>
                </div>
                <span>Spanish (Native)</span><br/>
                <span>English (Certified C1 on 2017)</span><br/>
                <span>German (Certified B2 on 2020)</span><br/>
            </div>
            <div>
                <div className='my-3'>
                    <b>SKILLS WEB</b><br/>
                </div>
                <span>HTML/CSS</span><br/>
                <span>Django/Python/React</span><br/>
                <span>JavaScript/PHP</span><br/>
                <span>Laravel/Vue</span><br/>
                <span>Flutter</span><br/>
                <span>Solidity</span><br/>
                <span>AWS, Git, Trello</span><br/>
            </div>
            <div>
                <div className='my-3'>
                    <b>SKILLS DESKTOP</b><br/>
                </div>
                <span>C++</span><br/>
                <span>C#</span><br/>
                <span>Java</span><br/>
                <span>Unity &amp; Unreal 5</span><br/>
                <span>GLSL</span><br/>
                <span>Python</span><br/>
                <span>OpenGL &amp; Vulkan</span><br/>
                <span>Steam API integration</span><br/>
                <span>2D &amp; 3D Workflows</span><br/>
                <span>Desktop, Mobile &amp; VR</span><br/>
            </div>
        </div>
        <div className='about px-2 flex'>
            <div className='about__main anim_hid'>
                <div>
                    <b className='fs-4'>About me</b>
                </div>
                <br/>
                <p>
                    My name is Marcelo Colonia, I'm a 21 year old Berlin-based game designer and programmer. I've had game development as my passion for as long as I can remember and have been studying coding since I was 13 years old.
                    <br/><br/>
                    I've been doing Graphics Programming with OpenGL since 2017 and made a couple of 2D engines. On 2020 I launched a "test demo" for my engine on Steam called MaryPark St. Mainly to test if my engines were capable of making an actual game and not just cool things to put on my CV.
                    <br/><br/>
                    Currently I'm working on my first 2D/3D engine (but not my first 3D project). I'm also researching raytracing and VR technology and since 2020 I've been lead programmer at E-Pask managing small teams and developing custom programs for big companies.
                    <br/><br/>
                    For me, games are more than just a bunch of pixels on a screen or a way to have fun. Games are much more than that, art, unique life-changing experiences in some cases.
                    <br/><br/>
                </p>
            </div>
            <div className='about__favs anim_hid'>
                <div className='about__fav_item'>
                    <b>My favorite games:</b><br/>
                    {games.map((element, index) => {
                            return (<><span key={index} className="anim_hid">- {element}</span><br/></>);
                        })}
                </div>
                <div className='about__fav_item'>
                    <b>My favorite artists:</b><br/>
                    {artists.map((element, index) => {
                        return (<><span key={index}>- {element}</span><br/></>)
                    })}
                </div>
            </div>
            <div className='mt-4 experience'>
                <div className='experience__jobs'>
                    <div className='anim_hid'>
                        <b className='fs-4'>Experience</b>
                    </div>
                    {jobs.map((element) => {
                        let position = "";
                        if (element.position) position = "Position: " + element.position;
                        return (
                            <div className='about__job anim_hid'>
                                <Separator/>
                                <span><b>{element.dates}</b></span><br/>
                                <span>{element.place}</span><br/>
                                <span>{position}</span><br/>
                                <ul>
                                    {element.tasks.map((task, index) => {
                                        return (
                                            <div className='my-1' key={index}>
                                                <li key={index}>{task}</li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className='experience__projects pt-3'>
                    <div className='anim_hid'>
                        <b className='fs-4'>Passion Projects</b>
                    </div>
                    {projects.map((element) => {
                        return (
                            <div className='about__project anim_hid'>
                                <Separator/>
                                <span>{element.title}</span><br/>
                                <ul>
                                    {element.tasks.map((task, index) => {
                                        return (
                                            <div className='my-1' key={index}>
                                                <li key={index}>{task}</li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
