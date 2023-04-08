import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDentalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const[dentalSel,setDentalSel] =useState({})
  const {id}= useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  const {themeState} = useDentalStates()

  useEffect(() => {
    fetch(url)
    .then(res=>res.json())
    .then(data=>setDentalSel(data))
  }, [])
  
  
  return (
    <div className= {themeState.className}>
      <h1>Detail Dentist id </h1>
      
      <div className="tablaDetalle">
      <table>
      <tr>
      <td> {dentalSel.name} </td>
      <td> {dentalSel.email} </td>
      <td> {dentalSel.phone} </td>
      <td> {dentalSel.website} </td>

      </tr>
      </table>
</div>
      
    
    </div>
  )
}

export default Detail