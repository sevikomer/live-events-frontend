import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className=' bg-black text-white'>
      <div className='flex justify-between items-center'>
        <button onClick={() => setIsNavOpen((prev) => !prev)} >
          <img src={'/images/hamburger.svg'} alt='menu' className='lg:hidden pb-1 ml-1 w-10' />
        </button>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-xl m-1 p-3">
          <li className='hover:text-orange'>
            <Link to="/informations" className='uppercase'>informations</Link>
          </li>
          <li className='hover:text-orange'>
            <Link to="/programmation" className='uppercase'>programmation</Link>
          </li>
          <li className='hover:text-orange'>
            <Link to="/lieux" className='uppercase'>lieux</Link>
          </li>
        </ul>
        <div className='m-1 p-3'>
          <Link to="/" className='text-orange hover:text-white font-extrabold text-2xl uppercase'>se déconnecter</Link>
        </div>
      </div>
      <nav className='flex gap-8 text-xl lg:hidden'>
        <section className='MOBILE-MENU block pl-2 lg:hidden'>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <ul className="">
              <li className="my-8 hover:text-orange">
                <Link to="/informations" className='uppercase'>informations</Link>
              </li>
              <li className="my-8 hover:text-orange">
                <Link to="/programmation" className='uppercase'>programmation</Link>
              </li>
              <li className="my-8 hover:text-orange">
                <Link to="/lieux" className='uppercase'>lieux</Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        
        width: 100%;
      }
    `}</style>

    </div >
  )
}

export default Header