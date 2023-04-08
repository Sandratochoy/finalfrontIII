import React from "react";
import { useDentalStates } from '../Components/utils/global.context'


const Card = ({ dental }) => {

  const {favDispatch} = useDentalStates()
  
  const favs  = localStorage.getItem("favs")
   
  const addFav = () => {
    favDispatch({type: 'ADD', payload: dental})
  }
 
  
return (
  
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
       <img src="./images/doctor.jpg" alt="image doctor"/> 
        <h3> {dental.name} </h3>
        <h3> {dental.username} </h3>
        

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
        </div>
        
       
           
       
  );
};

export default Card;
