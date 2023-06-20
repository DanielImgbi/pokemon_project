import { FaToggleOff, FaToggleOn} from 'react-icons/fa';
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

const ThemeToggle = () => {    
    const themeContext = useContext(ThemeContext)

    const handleClick = () => {
        themeContext!.setDarkTheme(prevVal => !prevVal);
    }
    
  return (
    <button onClick={handleClick}>
        { themeContext!.theme === 'dark' ?
            <FaToggleOn  
                className="text-dark-text text-2xl"
            />
            :
            <FaToggleOff 
                className="text-light-text text-2xl"
            />
        }
    </button>
  )
}

export default ThemeToggle