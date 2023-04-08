import React, {useState} from "react";

 
const Form = ({handleClick}) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const[ user, setUser] =useState ({
    name: "",
    mail: ""
  })
  

  const  handleSubmit = (e)=> {
    e.preventDefault()
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let mailTest = emailRegex.test(user.mail)
    if(mailTest && user.name.length > 5) {  
    alert("gracias " + user.name +" ,te contactaremos cuando antes vía mail" )
    }else {
    alert("Por favor verifique su información nuevamente") 
    } }
    
 


  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <input role ="name" type="name"
        onChange={(e)=> setUser({...user,name: e.target.value})}
        />
         <input role ="mail" type="email"
        onChange={(e)=> setUser({...user,mail: e.target.value})}
        />
        <button onClick ={handleClick} >Send</button>
   
      </form>
 
    

    </div>

    

  );
};

export default Form;
