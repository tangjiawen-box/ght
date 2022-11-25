import React from "react";
import { User } from "./search-panel";


interface Lists {
    id: string,
    name: string,
    personId: string,
    organization: string,
    created: number,
}

interface List {
    users: User[],
    list: Lists[]
}

export const List = ({users, list}: List) => {
    return <table>
        <thead>
            <tr>
                <th>用户名</th>
                <th>密码</th>
            </tr>
        </thead>
        <tbody>
            
                {
                  list.map(lists => <tr>
                    <td>{lists.name}</td>
                    <td>
                        {
                users.find(user => user.id === lists.id)?.name || undefined
                        }
                    </td>
                  </tr>)
                }
            
        </tbody>
    </table>
}