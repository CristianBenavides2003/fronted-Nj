import { useState, useEffect } from 'react';
import { getUsuarios, addUsuario, deleteUsuario, updateUsuario } from './api/usuarios';

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [newUser, setNewUser] = useState({ id: '', nombre: '', correo: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [apiType, setApiType] = useState('fastapi'); // Estado para elegir la API

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await getUsuarios(apiType); // Llama a la API seleccionada
      setUsuarios(data);
    };
    fetchUsuarios();
  }, [apiType]); // Vuelve a cargar los usuarios si cambia la API seleccionada

  const handleAddUsuario = async () => {
    const newUserData = {
      id: newUser.id,
      nombre: newUser.nombre,
      correo: newUser.correo
    };
    const addedUser = await addUsuario(apiType, newUserData); // Llama a la API seleccionada
    if (addedUser) {
      setUsuarios([...usuarios, addedUser]);
      setNewUser({ id: '', nombre: '', correo: '' });
    }
  };

  const handleDeleteUsuario = async (id) => {
    const deletedUser = await deleteUsuario(apiType, id); // Llama a la API seleccionada
    if (deletedUser) {
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    }
  };

  const handleEditUsuario = (usuario) => {
    setEditingUser(usuario); // Carga los datos del usuario en edición
  };

  const handleUpdateUsuario = async () => {
    const updatedUser = {
      nombre: editingUser.nombre,
      correo: editingUser.correo
    };

    const result = await updateUsuario(apiType, editingUser.id, updatedUser); // Llama a la API seleccionada
    if (result) {
      setUsuarios(
        usuarios.map((usuario) =>
          usuario.id === editingUser.id ? { ...usuario, ...updatedUser } : usuario
        )
      );
      setEditingUser(null); // Finaliza la edición
    } else {
      console.error('No se pudo actualizar el usuario.');
    }
  };

  return (
    <div>
      <h1>Usuarios-2</h1>
      {/* Selector para elegir la API */}
      <div>
        <label>Seleccione API:</label>
        <select value={apiType} onChange={(e) => setApiType(e.target.value)}>
          <option value="fastapi">FastAPI</option>
          <option value="node">Node.js</option>
        </select>
      </div>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.correo}
            <button onClick={() => handleEditUsuario(usuario)}>Editar</button>
            <button onClick={() => handleDeleteUsuario(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {editingUser ? (
        <div>
          <h2>Editar Usuario</h2>
          <input
            type="text"
            value={editingUser.nombre}
            onChange={(e) =>
              setEditingUser({ ...editingUser, nombre: e.target.value })
            }
            placeholder="Nombre"
          />
          <input
            type="email"
            value={editingUser.correo}
            onChange={(e) =>
              setEditingUser({ ...editingUser, correo: e.target.value })
            }
            placeholder="Correo"
          />
          <button onClick={handleUpdateUsuario}>Actualizar Usuario</button>
          <button onClick={() => setEditingUser(null)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <h2>Agregar Usuario</h2>
          <input
            type="text"
            value={newUser.id}
            onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
            placeholder="ID"
          />
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
      )}
    </div>
  );
}
