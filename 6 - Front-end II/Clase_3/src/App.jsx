import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card size="lg" orientation="horizontal">
        <h1 style={{ color: "black" }}>Hola! Soy Javier</h1>{" "}
        <p>Ésto es horizontal</p>
      </Card>
      <Card>
        <h1 style={{ color: "black" }}>Hola! Soy Javier</h1>{" "}
        <p>Ésto es horizontal</p>
      </Card>
      <Card>
        <h1>Consigna 2</h1>{" "}
        <img src="https://placehold.co/400x400" alt="400x400" />
        <Button>Agregar</Button>
      </Card>
      <Card>
        <form action="">
          <label htmlFor="">Nombre:</label>
          <input type="text" />
          <label htmlFor="">Contraseña</label>
          <input type="password" />
          <Button type="submit">Enviar</Button>
        </form>
      </Card>
    </>
  );
}

export default App;
