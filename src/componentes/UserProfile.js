// src/components/UserProfile.jsx
import React, { useState } from 'react'; // Importa React y el hook useState.
import styles from '../styles/UserProfile.module.css'; // Importa los estilos específicos de este componente.

function UserProfile() {
  // useState hook que inicializa el nombre del usuario como "John Doe".
  const [name, setName] = useState("John Doe");

  // Función que cambia el nombre entre "John Doe" y "Jane Doe".
  const changeName = () => {
    const newName = name === "John Doe" ? "Jane Doe" : "John Doe";
    setName(newName); // Actualiza el estado con el nuevo nombre.
  };

  return (
    <div className={styles.profile}> {/* Aplica la clase 'profile' del CSS Module */}
      <h1>User Profile</h1>
      <h2>{name}</h2> {/* Muestra el nombre del usuario */}
      <button 
        className={styles.button} 
        onClick={changeName} /* Evento onClick para cambiar el nombre del usuario */
      >
        Change Name
      </button> {/* Botón que cambia el nombre */}
    </div>
  );
}

export default UserProfile; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.
