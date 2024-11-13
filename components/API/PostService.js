import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get('https://reqres.in/api/users')
            return response.data.data
        } catch (e) {
            console.log(e)
        }
    }
}