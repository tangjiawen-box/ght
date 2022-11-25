import qs from "qs";
import React from "react";
import { useState, useEffect } from "react";
import { CleanObject, useDebounces, useMount } from "utils";
import { List } from "./list"
import { SearchPanel } from "./search-panel"



const apiUrl= process.env.REACT_APP_API_URL

export const ProjectListScreens = () => {
  
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    
    const [users, setUsers] = useState([])

    const [list, setList] = useState([])
    

    const debouncesParam = useDebounces(param, 200)

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(CleanObject(debouncesParam))}`).then(async response => {
            if (response.ok) {
               setList( await response.json())
            }
        })   
    }, [debouncesParam])
    


    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
       })
    

    return <div>
       <SearchPanel users={users}  param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}