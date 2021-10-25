import { createContext, useReducer } from "react"

const RegionContext = (props)=>{

    const initialState = {
        region:'africa'.toLocaleLowerCase()
    }

    const reducer = (state, action)=>{
        switch (action.type) {
            case 'CHANGE_REGION':
            return action.payload
            default:
                return state
        }
    }
    const [state, dispatch ] = useReducer(reducer , initialState)
    return (
        <Region.Provider value={[state, dispatch]}>
            {props.children}
        </Region.Provider>
    )
}

export default RegionContext;
export const Region = createContext()