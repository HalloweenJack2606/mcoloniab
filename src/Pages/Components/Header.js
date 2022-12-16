import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id="header">
        <div className='sticky__nav'>
          <nav>
            <div className='nav__grid'>
              <Link className='grid__cell grid_no_mobile' to="/">
                <span className='fs-3 selectable__cell'>
                  marcelo colonia
                </span>
              </Link>

              <div className='grid__cell flex'>
                <Link className='mx-5 selectable__cell' to="/">
                  <span className='fs-3'>
                    about
                  </span>
                </Link>
                <Link className='selectable__cell' to="/projects">
                  <span className='fs-3'>
                    projects
                  </span>
                </Link>
              </div>
              
              <div className='grid__cell grid_no_mobile'>
                <a className='fs-3 selectable__cell' href="https://github.com/HalloweenJack2606" target="_blank">
                  git
                </a>
              </div>
            </div>
          </nav>
        </div>
    </div>
  )
}
