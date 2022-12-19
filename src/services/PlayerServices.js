import axios from 'axios'

const api = axios.create({
    baseURL: 'https://240c-187-11-110-154.sa.ngrok.io/',
    headers: {
        'ngrok-skip-browser-warning': 'true',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Request-Method': 'GET',
        // 'Access-Control-Request-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    }
})

export const loadRanking = async () => {
    const { data } = await api.get('/api/players/')

    return data 
}

export const loadPlayer = async (playerID) => {
    const { data } = await api.get(`/api/players/${playerID}`)

    return data
}