import { API_HOST } from "../utils/constants";

export function getNewsApi() {
    //const url = `${API_HOST}/api/noticias?_sort=created_at:DESC&_limit=100`
    const url = `${API_HOST}/api/noticias?populate=*_sort=created_at:DESC&_limit=100`

    return fetch(url)
    .then((response) => {
         return response.json();
    })
    .then ((result) => {
        //console.log(result);
        return result;
    })
}