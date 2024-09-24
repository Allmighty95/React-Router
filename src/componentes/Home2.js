// src/components/Home.jsx
import React from 'react'; // Importa React para crear componentes.
import styles from '../styles/Home.module.css'; // Importa los estilos específicos de este componente.

function Home2() {
  return (
    <div className={styles.home2}> {/* Aplica la clase 'home' del CSS Module */}
      <h1>Welcome to the Home Page</h1> {/* Texto que se muestra en la página */}
    </div>
  );
}

export default Home2; // Exporta el componente para poder utilizarlo en otras partes de la aplicación.
