import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.punkapi.com/v2/beers'
})


export const beersApi = {
    
    getAllBeers(pageNumber) {
        return instance.get(`?page=${pageNumber}`)
        .then(response => response.data)
    },

    getBeerCard(id) {
        return instance.get(`/${id}`)
        .then(response => response.data)
    },

}


