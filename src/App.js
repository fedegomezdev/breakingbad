import React, {useState, useEffect} from 'react';
import axios from 'axios';



function Frase({frase}){
  return(
    <div className='contenedor'>
    <div className='frase'>
       <h1>{frase.quote}</h1>
       <p>{frase.author}</p>
    </div>
    </div>
  )
}



function App (){

  const [frase, obtenerFrase] = useState('');
  
    const consultarApi = async () => {
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      obtenerFrase(resultado.data[0]);
   }

  //consulta a una rest api
    useEffect(
      () =>{ 
       consultarApi();
      }
    , [] ) //le paso un arreglo vacio indicando que no se tiene que actualizar nada para que cambie


  return (
    <div className='contenedor'>
      <Frase 
        frase={frase}
      />
      <button
      onClick={consultarApi}
      >Generar Frase</button>
    </div>
  )
}

export default App;