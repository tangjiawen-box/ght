import React, { ReactNode, useContext, useState } from "react"
import { User } from "screens/project-list/search-panel"
import * as auth from '../auth-provider'


interface Props {
    username: string,
    password: string
}

const AuthContext = React.createContext<{
    user: User | null,
    login: (form: Props) => Promise<void>,
    register: (form: Props) => Promise<void>,
    logout: () => Promise<void>,
}  | undefined>(undefined)
AuthContext.displayName = 'AuthContext'



export const AuthProvider = ({children}: {children: ReactNode}) => {
      
   const [user, setUser] = useState<User | null>(null)
   const login = (form: Props) => auth.login(form).then(user => setUser(user))
   const register = (form: Props) => auth.register(form).then(user => setUser(user))
   const logout = () => auth.logout().then(user => setUser(null))
   return <AuthContext.Provider  children={children} value={{user, login, register, logout}} ></AuthContext.Provider>
}  


  export const useAuth = () => {
   const context =  useContext(AuthContext)
   if(!context) {
    throw new Error("错位u")
   }
   return context
  }


   


