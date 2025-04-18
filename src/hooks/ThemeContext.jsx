import {React, createContext, useState } from 'react'

  const ThemeContext = createContext();


const ThemeProvider = ({children}) => {
    const[theme, setTheme]= useState('light');
    function toggleTheme(){
        setTheme((prevTheme)=> prevTheme =='light'? 'secondary' : 'light');
        console.log("Theme changed to:", theme); //  Debugging

    }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
     </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext}