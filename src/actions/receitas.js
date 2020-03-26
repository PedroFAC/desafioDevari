import api from '../services/api'

export default async function getReceitas(token){
    api.setHeaders({Authorization: 'Token '+token})
    const response =  await api.get('/api/v1/recipe/')
    const receitas = response.data
    console.log(receitas)
    return {
        type:'GETRECEITAS',
        receitas:receitas
    }
}
