const axios = require('axios')

const BASE_URL = 'https://icanhazdadjoke.com/'

const getJoke = async() => {
try {
    res = await axios.get(`${BASE_URL}`, {headers: {"Accept": 'application/json'}} )
    return res.data.joke;
    
} catch (error) {
    console.log(error);
    
}
  

}

module.exports = getJoke