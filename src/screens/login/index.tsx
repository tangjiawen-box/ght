import React from "react";


export const LoginScreens = () => {
   
    const apiUrl= process.env.REACT_APP_API_URL
    const login = (param: {username: string, password: string}) => {
        fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(param)

            
        }).then(async response => {
            if (response.ok) {
              
            }
        })
    
    }
    //@ts-ignore
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username =(event.currentTarget.elements[0] as HTMLInputElement). value   
        const password =(event.currentTarget.elements[1] as HTMLInputElement). value
         login({username, password})
    } 

    return <form onSubmit={handleSubmit}>
       <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id={'username'}></input>
       </div>
       <div>
          <label htmlFor="password">密码</label>
          <input type="password" id={'password'}></input>
       </div>
       <button type="submit">提交</button>
    </form>
}