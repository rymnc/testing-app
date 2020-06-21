import React, {createContext} from 'react';
import Axios from 'axios'
import {useState,useEffect} from 'react'

export const AppContext = createContext()

export const AppProvider = (props) =>{

    const [data,setData] = useState([])

    useEffect(() => {
        const fetcher = async () =>{
            const fetching = await Axios.get('http://127.0.0.1:3000/data')
            console.log(fetching.data)
            setData(fetching.data) 
        }

        fetcher()
        
    }, [])

    const handleUpdate = async () =>{
        const fetching = await Axios.get('http://127.0.0.1:3000/data')
        console.log(fetching.data)
        setData(fetching.data)
    }


    return(
        <AppContext.Provider value={{data,handleUpdate}}>
            {props.children}
        </AppContext.Provider>
    )
}