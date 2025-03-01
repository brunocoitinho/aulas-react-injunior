import { createContext } from "react"

interface UserContextType{
    name: string
    age: number
    email: string
}

const UserContext = createContext<UserContextType | null>(null)

export {UserContext}