import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    
    headers: {
        Authorization: 
            'Client-ID 1c28073ba0ae922ffd3a929c4943c725f606c17d706c75b5b7de06b836436d17'}

});