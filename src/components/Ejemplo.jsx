function Ejemplo ({ saludo }) {
  
    
      let saludo=""

     if (saludo){
    return (<h1>Hola {saludo}</h1>)
    }else{
      return (<h1>No hay variable</h1>)
    }

    
  
}

export default Ejemplo;

