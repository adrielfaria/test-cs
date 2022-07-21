import preguntas from '../preguntas/preguntas.component';
import { useState } from "react";
/*import shooter from '../../assets/shooter.jpg'
import morty from '../../assets/morty.jpg'
import nico from '../../assets/nico.jpg'
import silver from '../../assets/silver.jpg'
import nova from '../../assets/nova.jpg'
import ak from '../../assets/ak.jpg'
import eagle from '../../assets/aguila.jpg'
import global from '../../assets/global.jpg'*/

import './pet-test.styles.css';

const PetTest = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswerSubmit(isCorrect, event){
  if (isCorrect) setPuntuacion(puntuacion + isCorrect);
    
    if(preguntaActual === preguntas.length - 1) {
      setIsFinished(true);
    }else{
      setPreguntaActual(preguntaActual + 1);
    }
  }

  if (isFinished) {
    if (puntuacion < 23) return(
    <main>
      <div className='test-container'>
        <div className='question-title'>
          <span className='respuesta'>Sos un plata, malo de mierda</span>
        </div>
        
        
        <button onClick={() => window.location.href = '/'}> Volver a jugar</button>
      </div>
    </main>
    );
    if (puntuacion < 29) return(
      <main>
        <div className='test-container'>
          <div className='question-title'>
            <span className='respuesta'>Sos un novita, casi tan malo como nico</span>
          </div>
          
          
          <button onClick={() => window.location.href = '/'}> Volver a jugar</button>
        </div>
      </main>
      );
      if (puntuacion < 31) return(
        <main>
          <div className='test-container'>
            <div className='question-title'>
              <span className='respuesta'>Sos ak</span>
            </div>
            
            <button onClick={() => window.location.href = '/'}>Estas hardstuck en ak</button>
          </div>
        </main>
        );
        if (puntuacion < 32) return(
          <main>
            <div className='test-container'>
              <div className='question-title'>
                <span className='respuesta'>Sos aguila, el rango de holy</span>
              </div>
              
              <button onClick={() => window.location.href = '/'}> Volver a jugar</button>
            </div>
          </main>
          );
            if (puntuacion <= 40) return(
              <main>
                <div className='test-container'>
                  <div className='question-title'>
                    <span className='respuesta'>Sos global, casi tan bueno como ✪$HOOT3R</span>
                  </div>
                  
                  <button onClick={() => window.location.href = '/'}> Volver a jugar</button>
                </div>
              </main>
              );
  }

  return (
    <div className='test-container'>
      <div className='left-side'>
        <div className='question-number'>
          <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
        </div>
        <div className='question-title'>{preguntas[preguntaActual].titulo}</div>
      </div>
      <div className='right-side'>
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button key={respuesta.textoRespuesta} onClick={(event) => handleAnswerSubmit(respuesta.isCorrect, event)}>
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
    </div>
  )
};


  export default PetTest;

