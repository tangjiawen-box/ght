import { useEffect, useInsertionEffect, useState } from "react"

const flag = (a: number) => a === 0 ? false : !a

const apiUrl= process.env.REACT_APP_API_URL

export const CleanObject = (obj: Object) => {

     let result = {...obj}

     Object.keys(result).map((key) => {
        //@ts-ignore
            let aa = result[key]
        if(flag(aa)) {
                //@ts-ignore
            delete result[key]
        }
     })
        return result           
}


export const useMount = (callback:() => void) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounces = <T>(param: T, delay: number) => {
     const [deb, setDeb] = useState(param)

   useEffect(() => {
     let timer = setTimeout(() => setDeb(param), delay)
     return () => clearTimeout(timer)
   }, [param, delay])
return deb
}

function setUsers(arg0: any) {
    throw new Error("Function not implemented.")
}
