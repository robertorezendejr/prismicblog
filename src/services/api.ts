import axios from 'axios'

export const api = axios.create({
    // *** VOltart aqui - Revificar se em produção preciso deixar assim:
    // https://cursodemsproject.com.br/api - no momento ele ta pegando do: http://localhost:3000/api
    baseURL: '/api'
})