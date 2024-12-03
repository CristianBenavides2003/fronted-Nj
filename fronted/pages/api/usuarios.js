import axios from 'axios';
const API_URL_FASTAPI = 'http://3.228.243.149:30001';
export async function getUsuarios() {
  try {
    const response = await axios.get(`${API_URL_FASTAPI}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching usuarios from FastAPI:', error);
    return [];
  }
}

export async function addUsuario(data) {
  try {
    const response = await axios.post(`${API_URL_FASTAPI}/users`, data);
    return response.data;
  } catch (error) {
    console.error('Error adding usuario to FastAPI:', error);
    return null;
  }
}

export async function updateUsuario(id, data) {
  try {
    const response = await axios.put(`${API_URL_FASTAPI}/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating usuario in FastAPI:', error);
    return null;
  }
}

export async function deleteUsuario(id) {
  try {
    const response = await axios.delete(`${API_URL_FASTAPI}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting usuario from FastAPI:', error);
    return null;
  }
}


