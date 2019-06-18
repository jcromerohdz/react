import axios from 'axios';

const KEY = 'AIzaSyDnoVIpKAbnjgKcU7-f0jQdqMrl13tz7GM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

