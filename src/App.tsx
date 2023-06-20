import Components from "./pages";
import { ThemeContext } from './components/context/themeContext.ts';
import {useLayoutEffect, useState} from 'react';


interface ThemeContextType {
  darkTheme?: boolean,
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
  theme: string
}


const App:React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const [theme, setTheme] = useState(()=>{
            const myTheme = localStorage.getItem('theme')
    if(myTheme){
      return myTheme;
    }else{
      return "light";
    }
  })

  useLayoutEffect(()=>{
    setTheme(theme === "dark"? "light" : "dark");
    localStorage.setItem('theme', theme);
  }, [darkTheme])

  if(theme === 'dark'){
    document.documentElement.style.background = 'black';
  } else{
    document.documentElement.style.background = 'white';
  }

  const themeContext: ThemeContextType = {
    darkTheme, setDarkTheme, theme
  }

  
  return (
    <div >
      <ThemeContext.Provider value={themeContext}>
        <Components />
      </ThemeContext.Provider>
    </div>
    )

}

export default App