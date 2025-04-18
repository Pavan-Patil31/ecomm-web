import React, { Children, createContext, useState } from 'react'

const AuthContext = createContext();



const AuthProvider = ({Children}) => {
    const [loggedUser, setLoggedUser] = useState();

  return (
    <AuthContext.Provider>
        {Children}
      
    </AuthContext.Provider>
  )
}

export { AuthProvider, }
