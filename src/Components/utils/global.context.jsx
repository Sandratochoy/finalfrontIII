import { createContext,useEffect, useState, useContext, useReducer  } from "react";

 
export const ContextGlobal = createContext();

const theme = {
  dark: {
      theme: false,
      className: "dark",
      bgColor: 'black',
      color: 'white',
      
  },
  light: {
      theme: true,
      classname: "light",
      bgColor: 'white',
      color: 'black',
     }
}
const initialThemeState = theme.light

const initialFavstate = JSON.parse(localStorage.getItem('favs')) || []

const favReducer = (state, action) => {
  switch(action.type){
      case 'ADD':
      return [...state, action.payload]  
      default:
          throw new Error()  
  }
 }

const themeReducer = (state, action) => {
  switch(action.type){
      case 'Dark':
          return theme.dark
      case 'Ligth':
          return theme.light
      default: 
          throw new Error ()}
   }

export const ContextProvider = ({ children }) => {
 
const [DentalList, setDentalList] = useState([])
const url = 'https://jsonplaceholder.typicode.com/users'
const [favState,favDispatch] =useReducer(favReducer,initialFavstate)
const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
 

useEffect (()=>{
  localStorage.setItem("favs", JSON.stringify(favState))
      }, [favState])

  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>setDentalList(data))
   }, [])
   
  return (
    <ContextGlobal.Provider value={{ DentalList,setDentalList, favState,favDispatch,themeState, themeDispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useDentalStates = () => useContext(ContextGlobal)