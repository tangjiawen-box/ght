import { useAuth } from "context/auth-context";
import React from "react";


export const LoginScreens = () => {
   
    const apiUrl= process.env.REACT_APP_API_URL

    const {login, user}= useAuth()

   
    //@ts-ignore
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username =(event.currentTarget.elements[0] as HTMLInputElement). value   
        const password =(event.currentTarget.elements[1] as HTMLInputElement). value
         login({username, password})
    } 
    
    return <form onSubmit={handleSubmit}>
        {
            user ? <div>
              登陆成功  {user?.name}  {user?.token}</div>
            : null
        }
        <div>
           <label htmlFor="username">用户名</label>
           <input type="text" id={'username'} />
        </div>
        
        <div>
        <label htmlFor="password">密码</label>
           <input type="password" id={'password'} />
        </div>
     
        <button type="submit" >登录</button>
    </form>
 
}