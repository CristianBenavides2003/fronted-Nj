import axios from 'axios';

<<<<<<< HEAD
const API_URLS = {
  fastapi: 'http://3.228.243.149:30000/fastapi',
  node: 'http://3.228.243.149:30001'
};
=======
const API_URL_FASTAPI = 'http://3.228.243.149:30000';  // Asegúrate de que tu FastAPI esté corriendo en este puerto
const API_URL_NODE = 'http://3.228.243.149:30001';
>>>>>>> a63f10dcbd0952f51fd4b71a0308eb9acc4aeaa1

export async function getUsuarios(api = 'fastapi') {
  try {
<<<<<<< HEAD
    const response = await axios.get(`${API_URLS[api]}/users`);
=======
    const response = await axios.get(`${API_URL_FASTAPI}/users`);
>>>>>>> a63f10dcbd0952f51fd4b71a0308eb9acc4aeaa1
    return response.data;
  } catch (error) {
    console.error(`Error fetching usuarios from ${api} API:`, error);
    return [];
  }
}

export async function addUsuario(api = 'fastapi', data) {
  try {
<<<<<<< HEAD
    const response = await axios.post(`${API_URLS[api]}/users`, data);
=======
    const response = await axios.post(`${API_URL_FASTAPI}/users`, data);
>>>>>>> a63f10dcbd0952f51fd4b71a0308eb9acc4aeaa1
    return response.data;
  } catch (error) {
    console.error(`Error adding usuario to ${api} API:`, error);
    return null;
  }
}

export async function updateUsuario(api = 'fastapi', id, data) {
  try {
<<<<<<< HEAD
    const response = await axios.put(`${API_URLS[api]}/users/${id}`, data);
=======
    const response = await axios.put(`${API_URL_FASTAPI}/users/${id}`, data);
>>>>>>> a63f10dcbd0952f51fd4b71a0308eb9acc4aeaa1
    return response.data;
  } catch (error) {
    console.error(`Error updating usuario in ${api} API:`, error);
    return null;
  }
}

export async function deleteUsuario(api = 'fastapi', id) {
  try {
<<<<<<< HEAD
    const response = await axios.delete(`${API_URLS[api]}/users/${id}`);
=======
    const response = await axios.delete(`${API_URL_FASTAPI}/users/${id}`);
>>>>>>> a63f10dcbd0952f51fd4b71a0308eb9acc4aeaa1
    return response.data;
  } catch (error) {
    console.error(`Error deleting usuario from ${api} API:`, error);
    return null;
  }
}


