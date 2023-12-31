import {useState} from 'react'
import { Link } from 'react-router-dom';
import {styles} from '../style';
import {navLinks} from '../constants/index'
import {logo,menu,close} from '../assets'
const Navbar = () => {
  const [active,setActive] = useState('')
  const [toggle,setToggle] = useState(false)
  return ( 
    <nav>
      <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary` }>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {setActive("");window.scrollTo(0,0)}}
          >
            <img src={logo} alt="logo" className='w-[45%]  object-contain' />
          </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((links) =>(
            <li key={links.id} className={`${active === links.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(links.title)}
            >
              <a href={`#${links.id}`}>{links.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex  items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[66px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle((prev) => !prev)} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end flex-col gap-4'>
          {navLinks.map((links) =>(
            <li key={links.id} className={`${active === links.title ? "text-white" : "text-secondary"}font-poppins text-[16px] font-medium cursor-pointer`}
            onClick={() =>{ setActive(links.title); setToggle((prev) => !prev)}}
            >
              <a href={`#${links.id}`}>{links.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar