export const getFromApi = async (value, query) => {
    let apiUrl = buildUrl(value, query);
    
    let res = await fetch(apiUrl);
    let val = await res.json();
    // console.log(val)
    return val;
}

export const getFromUrl = async (url) => {
    if(!url) return;
    let res = await fetch(url);
    return await res.json();
}

const buildUrl = (value, query) => {
    let apiUrl;
    
    switch (value) {
        case 'dimension':
            apiUrl = `https://rickandmortyapi.com/api/location/?dimension=${query}`
            break;
        case 'location':
            apiUrl = `https://rickandmortyapi.com/api/location/?name=${query}`
            break;
        case 'episode':
            let episodeRegex = /^(S[0-9]{1,2}E[0-9]{1,2})$/i
            if(episodeRegex.test(query)){
                apiUrl = `https://rickandmortyapi.com/api/episode/?episode=${query}`
            } else {
                apiUrl = `https://rickandmortyapi.com/api/episode/?name=${query}`
            }
            break;
        default:
            apiUrl = null;
    }
    
    return apiUrl;
}
