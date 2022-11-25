import React, { useEffect } from "react";

export interface User {
      token: string;
      id: string,
      name: string,
}

interface SearchProps {
    users: User[],
    param: {
        name: string,
        personId: string,
    },
    setParam: (param: SearchProps['param']) => void,
}
 
export const SearchPanel = ({users, param, setParam}: SearchProps) => {
     
   
  
    return <form >
      <input type="text" value= {param.name}  onChange={e => setParam({
          ...param,
          name: e.target.value
          
      })} />
     <select value={param.personId}  onChange={e => setParam({
        ...param,
        personId: e.target.value
     })} >
      <option id="">负责人</option>
          {
            users.map(user => <option id={user.id}>{user.name}</option>)
          }      
     </select>
    </form>
}