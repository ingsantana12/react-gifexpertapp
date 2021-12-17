

export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=fwQ7fHyam5npBSl1t7nEZv7Mgc6oxs9V`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    // console.log(data)
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifts;
}