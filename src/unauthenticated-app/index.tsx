import { useState } from "react"
import { LoginScreens } from "./login"
import { RegisterScreens } from "./register"
import React from "react";



export const UnauthenticatedApp = () => {
  const [register, setregister] = useState(false)
  return  <div>
    {
    register ? <RegisterScreens/> : <LoginScreens/>
   } 

   <button onClick={() => setregister(!register)}>切换到{register ? '登录' : '注册'}</button>
  </div>

}