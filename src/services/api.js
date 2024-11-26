import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000' 
});

export const getProdutos = async () => {
  try {
    const response = await api.get('/produtos');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return []; 
  }
};

export const getProdutoById = async (id) => {
  try {
    const response = await api.get(`/produtos/${id}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null; 
    }
    console.error('Erro ao buscar produto:', error);
    return null; 
  }
};

export const getSupermercados = async () => {
  try {
    const response = await api.get('/supermercados'); // Nova rota
    const supermercados = response.data.reduce((acc, supermercado) => {
      acc[supermercado.id] = supermercado.nome;
      return acc;
    }, {});
    return supermercados;
  } catch (error) {
    console.error('Erro ao buscar supermercados:', error);
    return {};
  }
};

export default api;