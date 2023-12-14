import React, { useContext, useEffect } from "react"
import { useState } from 'react'

const CurrentSessionContext = React.createContext()
const UpdateCurrentSessionContext = React.createContext()

export function useCurrentSession() {
    return useContext(CurrentSessionContext)
}
export function useUpdateCurrentSession() {
    return useContext(UpdateCurrentSessionContext)
}

export function CurrentSessionProvider({ children }) {
    const [currentSession, setCurrentSession] = useState()
   
    return (
        <CurrentSessionContext.Provider value={currentSession}>
            <UpdateCurrentSessionContext.Provider value={setCurrentSession}>
                {children}
            </UpdateCurrentSessionContext.Provider>
        </CurrentSessionContext.Provider>
    )
}