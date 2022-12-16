import React, {useEffect} from 'react';
import Header from './Components/Header';
import voxel from '../images/voxel.jpg';
import mary from '../images/mary.png';
import engine from '../images/engine.png';
import sandbox from '../images/sandbox.png';
import happyhere from '../images/happyhere.png';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Voxel Game (Minecraft Clone)",
      desc: "My internet went out for about 5 days so I decided to dive deep into 3D graphics.",
      url: "https://github.com/HalloweenJack2606/MinecraftWeek",
      url_text: "read more",
      img: voxel,
    },
    {
      title: "Ludens Engine & Genesys Editor",
      desc: "A 2D & 3D engine with upcoming VR and Raytracing support. It uses OpenGL & Vulkan for rendering, DirectX support is planned.",
      url_text: "private repo",
      img: engine,
    },
    {
      title: "MaryPark St.",
      desc: "A short 15 minute experimental game. It was made as a tech-demo for the custom graphics engine.",
      url: "https://store.steampowered.com/app/1283850/MaryPark_St/",
      url_text: "read more",
      img: mary,
    },
    {
      title: "We Are Happy Here",
      desc: "One of my current projects. My first full-length indie game.",
      url_text: "more info soon",
      img: happyhere,
    },
    {
      title: "Sand Simulation",
      desc: "Per-pixel Sand Simulation on C++ and OpenGl.",
      url: "https://github.com/HalloweenJack2606/SandSimulation",
      url_text: "read more",
      img: sandbox,
    }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("anim_show", entry.isIntersecting);
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.anim_hid');
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <div id='projects' className='mt-5 py-5'>
        <Header/>
        <div className='projects__container'>
          {projects.map((element, index) => {
            return (
              <div className={`proj anim_hid ${(index % 2 == 1) ? "proj_sep" : ""}`}>
                <img className='proj__img' src={element.img}/><br/>
                <span className='fs-3'><b><u>{element.title}</u></b></span><br/>
                <span className='proj__desc'>{element.desc}</span><br/>
                <a href={element.url} target="_blank"><u>{element.url_text}</u></a>
              </div>
            )
          })
          }
        </div>
    </div>
  )
}
