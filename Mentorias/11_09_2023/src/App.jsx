import { useEffect, useState } from "react";

function Card({ photo, name, email }) {
  return (
    <li>
      <img src={photo} alt="" /> <h1>Nombre: {name}</h1> <p>Email: {email}</p>
    </li>
  );
}

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then(({ data }) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <ul>
      {users.map((usuario) => (
        <Card
          key={usuario.id}
          photo={usuario.avatar}
          name={usuario.first_name}
          email={usuario.email}
        />
      ))}
    </ul>
  );
}
export default App;

// https://pokeapi.co/
// https://pokeapi.co/api/v2/pokemon/ditto
// https://pokeapi.co/api/v2/pokemon/${pokemon}
