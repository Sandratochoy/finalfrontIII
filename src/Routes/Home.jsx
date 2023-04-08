import React from 'react'
import Card from '../Components/Card'
import { useDentalStates } from '../Components/utils/global.context'
import { Link } from 'react-router-dom'

 
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {DentalList, themeState} = useDentalStates()

  return (
    <main className= {themeState.className} >
      <h1>Home</h1>
      <div className='card-grid'>
      {DentalList.map(dental => <Link  key={dental} to= {'/Detail/' + dental.id}><Card dental={dental}/> 
      
      </Link>)}
      </div>
      
      
      
     
    </main>
  )
}

export default Home