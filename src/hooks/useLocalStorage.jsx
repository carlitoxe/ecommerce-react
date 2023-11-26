import { useReducer } from "react"

// const initialState = []

const useLocalStorage = (itemName) => {
    const [state, dispatch] = useReducer(reducer, []);
}

export { useLocalStorage }