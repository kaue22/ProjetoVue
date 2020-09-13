import { http } from './configuracao';

export default {
    registrar: ({ nome, email, senha }) => {
        return http.post('usuario'), { nome, email, senha }
    },
}