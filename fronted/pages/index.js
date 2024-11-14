import { useState, useEffect } from 'react';
import { getUsuarios, addUsuario, updateUsuario, deleteUsuario } from './api/usuarios';

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [newUser, setNewUser] = useState({ nombre: '', correo: '' });

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await getUsuarios();
      setUsuarios(data);
    };
    fetchUsuarios();
  }, []);

  const handleAddUsuario = async () => {
    const newUserData = {
      nombre: newUser.nombre,
      correo: newUser.correo,
    };
    const addedUser = await addUsuario(newUserData);
    if (addedUser) {
      setUsuarios([...usuarios, addedUser]);
      setNewUser({ nombre: '', correo: '' });
    }
  };

  const handleDeleteUsuario = async (id) => {
    const deletedUser = await deleteUsuario(id);
    if (deletedUser) {
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    }
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.correo}
            <button onClick={() => handleDeleteUsuario(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newUser.nombre}
          onChange={(e) => setNewUser({ ...newUser, nombre: e.target.value })}
          placeholder="Nombre"
        />
        <input
          type="email"
          value={newUser.correo}
          onChange={(e) => setNewUser({ ...newUser, correo: e.target.value })}
          placeholder="Correo"
        />
        <button onClick={handleAddUsuario}>Agregar Usuario</button>
      </div>
    </div>
  );
}
