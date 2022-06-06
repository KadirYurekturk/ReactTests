import axios  from "axios";

export const BASE_URL = "https://localhost:7249/api/";

export const ENDPOINTS = {
    products: "products",
}

export const createdAPIEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';

    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: (data) => axios.post(url, data),
        put: (data) => axios.put(url, data),
        delete: (id) => axios.delete(url + id),
    };


}
