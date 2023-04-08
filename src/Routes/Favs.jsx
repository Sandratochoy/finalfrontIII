import React from "react";
import Card from "../Components/Card";
import { useDentalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favState,themeState} = useDentalStates()

  return (
    <div className= {themeState.className}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

     
      {favState.map(dental => (
        <div>
        <img src="./images/doctor.jpg" alt="image doctor"/> 
        <h3> {dental.name} </h3>
        <h3> {dental.username} </h3>
        </div>
      ))}


        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
