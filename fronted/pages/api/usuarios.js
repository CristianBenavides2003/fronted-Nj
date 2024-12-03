import axios from 'axios';

const API_URLS = {
  fastapi: 'http://3.228.243.149:30000/fastapi',
  node: 'http://3.228.243.149:30001'
};

export async function getUsuarios(api = 'fastapi') {
  try {
    const response = await axios.get(`${API_URLS[api]}/users`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching usuarios from ${api} API:`, error);
    return [];
  }
}

export async function addUsuario(api = 'fastapi', data) {
  try {
    const response = await axios.post(`${API_URLS[api]}/users`, data);
    return response.data;
  } catch (error) {
    console.error(`Error adding usuario to ${api} API:`, error);
    return null;
  }
}

export async function updateUsuario(api = 'fastapi', id, data) {
  try {
    const response = await axios.put(`${API_URLS[api]}/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating usuario in ${api} API:`, error);
    return null;
  }
}

export async function deleteUsuario(api = 'fastapi', id) {
  try {
    const response = await axios.delete(`${API_URLS[api]}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting usuario from ${api} API:`, error);
    return null;
  }
}


