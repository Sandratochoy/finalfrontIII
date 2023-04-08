import React from 'react'
import { Link } from 'react-router-dom'
import { useDentalStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} = useDentalStates()
 
  const ChangeTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'Dark'})
    } else {
      themeDispatch({type: 'Ligth'})
    }
  }

  return (
    <nav>
        <img src="./images/DH.png" alt="image dh"/> 
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/contact"><h3>Contact</h3></Link>
        <Link to="/detail"><h3>Detail</h3></Link>
        <Link to="/favs"><h3>Favs</h3></Link>
        
        
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={ChangeTheme}>{themeState.theme ? 'Dark' : 'Ligth'}</button>
    </nav>
  )
}

export default Navbar 