// src/components/Counter.jsx
import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado.
import styles from '../styles/Counter.module.css'; // Importa los estilos específicos de este componente.

function Counter2() {
  // useState hook que inicializa el estado del contador en 0.
  const [count, setCount] = useState(0); 

  return (
    <div className={styles.counter2}> {/* Aplica la clase 'counter' del CSS Module */}
      <h1>Counter: {count}</h1> {/* Muestra el valor del contador */}
      <button 
        className={styles.button2} 
        onClick={() => setCount(count + 1)} /* Evento onClick para incrementar el contador */
      >
        Increment
      </button> {/* Botón que incrementa el valor del contador */}
    </div>
  );
}

export default Counter2; // Exporta el componente para que pueda ser usado en otras partes de la aplicación.
