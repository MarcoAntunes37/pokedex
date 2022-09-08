import axios from 'axios'

export default async function getPokemonImage(id: number){  
    const url= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      const request = await axios.get(url, 
        {responseType: 'arraybuffer'}
      ).then(response => {
        var imageNode: any = document.getElementById(`pokemon-image-${id}`);
        let blob = new Blob(
          [response.data], 
        {type: response.headers['content-type']}
      )
      let imgUrl = URL.createObjectURL(blob)
      imageNode.src = imgUrl
    })
}