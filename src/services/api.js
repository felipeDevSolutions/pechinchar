import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000' // URL do seu backend
});

export const getProdutos = async () => {
  try {
    const response = await api.get('/produtos');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};

export const getProdutoById = async (id) => {
  try {
    const response = await api.get(`/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return null; // Retorna null em caso de erro
  }
};


// Outras funções para as demais rotas da API...

export default api;