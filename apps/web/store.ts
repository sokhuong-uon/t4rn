import { createContext } from 'react'

const initialState = {
  first: "A",
  last: "J"
}

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState)

export default context