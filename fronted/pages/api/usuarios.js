import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';  // Asegúrate de que tu FastAPI esté corriendo en este puerto

export async function getUsuarios() {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching usuarios:', error);
    return [];
  }
}

export async function addUsuario(data) {
  try {
    const response = await axios.post(`${API_URL}/users`, data);
    return response.data;
  } catch (error) {
    console.error('Error adding usuario:', error);
    return null;
  }
}

export async function updateUsuario(id, data) {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating usuario:', error);
    return null;
  }
}

export async function deleteUsuario(id) {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting usuario:', error);
    return null;
  }
}
