import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url)=>{
  const {data} = await axios.get((url),{
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '2e42c1fe37msh37654f68c5b80c9p174618jsn410f4a90c01b'
      }
    
  })
  return data;
}