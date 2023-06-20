import { createContext } from "react";
interface ThemeContextType {
    darkTheme?: boolean,
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
    theme: string 
}


export const ThemeContext = createContext<ThemeContextType | null>( null);