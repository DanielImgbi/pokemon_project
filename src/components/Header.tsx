import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./context/themeContext";
import {useContext, useState} from 'react'
import {BsSearch, BsThreeDotsVertical} from 'react-icons/bs';

interface Props{
  handleSearchToggle: () => void
}

const Header = ({handleSearchToggle}: Props) => {
  
  const themeContext = useContext(ThemeContext);
  const [showNav, setShowNav] = useState(false);
  const userData = localStorage.getItem('user')
  const user = JSON.parse(userData!);

  const handleNavToggle = () => {
    setShowNav( prevVal => !prevVal )
  }

  return (
    <header className={`h-[90px] w-[100%] px-5 backdrop-filter backdrop-blur-md z-50 flex justify-between shadow-sm items-center fixed top-0 left-0
      ${ themeContext?.theme === 'dark' ? " bg-gray-800 bg-opacity-20" : ''}`}
    >
      <img 
        src="/GIF's/pokemon-logo-png-0.png" 
        alt="logo img" 
        height={"40px"} 
        width={"80px"}
      />

      <div className="w-[120px] flex justify-between items-center">

        <BsSearch 
          size={26 } 
          fill={`${themeContext?.theme === 'light' ? 'black' : 'white'}`} 
          onClick={handleSearchToggle}
          className='cursor-pointer'
        />

        <div className="h-[50px] w-[50px] rounded-full">
          <img src={user?.data.picture} className="h-3/3 w-3/3 rounded-full" />
        </div>

        <BsThreeDotsVertical 
          size={20} 
          fill={`${themeContext?.theme === 'light' ? 'black' : 'white'}`} 
          onClick={handleNavToggle}
          className='cursor-pointer'
        />

      </div>
      
      { 
        showNav &&
        <div 
          className={` p-3  shadow-xl absolute right-0 top-20 z-30 rounded flex flex-col items-center
          ${ themeContext?.theme === 'dark' ? "bg-dark-background" : 'bg-light-background'}`}
        >

          <span 
            className={`h-10 w-48 flex justify-evenly items-center text-gray-100 
            ${themeContext?.theme === 'light' ? "text-light-text" : "text-dark-text"}`}
          >
            Dark mode <ThemeToggle />
          </span>

          <span 
            className={`h-10 w-48 flex justify-evenly items-center text-gray-100 cursor-pointer
            ${themeContext?.theme === 'light' ? "text-light-text" : "text-dark-text"}`}
          >
            Caught pokemon
            
          </span>
        </div> 
      }
      
    </header>

  )
}

export default Header