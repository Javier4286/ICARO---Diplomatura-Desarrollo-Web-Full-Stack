import { useEffect, useState } from "react";
import "./App.css";

// # Contador con Notificaciones

// ## Objetivo

// Crear una aplicación que muestre un contador, un botón para incrementarlo y una notificación cada vez que el contador alcance un número múltiplo de 10.

// ## Características:

// **Contador:**
// Debe mostrar un número que inicialmente es 0.
// Debe tener un botón que, al hacer clic, incremente el contador en 1.

// **Notificación:**
// Cuando el contador alcance un número que es múltiplo de 10 (10, 20, 30, etc.), debe mostrarse una notificación en la pantalla que diga: "¡Has alcanzado un múltiplo de 10!".
// Esta notificación debe desaparecer después de 3 segundos.

function App() {
  const [count, setCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  }, [count]);
  return (
    <>
      <h1>Aplicación Contador</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((preState) => preState + 1);
        }}
      >
        {" "}
        Incrementar uno{" "}
      </button>
      {showNotification && <p>"¡Has alcanzado un múltiplo de 10!"</p>}
    </>
  );
}

export default App;
