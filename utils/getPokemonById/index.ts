import axios from 'axios'

export default async function getPokemonById(url: string){
    const options = {        
        url: url,
        method: 'GET',
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*"
        }
      }
      const request = await axios(options)
      return request.data
}