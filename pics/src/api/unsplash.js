import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4298065b2217adbbf4f5d0b51f9452abd1adb8a5a42a281a79110b707ff4a245'
    }
});