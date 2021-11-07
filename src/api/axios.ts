import axios from "axios";

export const get = <T = any>(url: string, params: any): Promise<T> => {
   return new Promise<T>((resolve, reject) => {
        axios.get(url, {
            params
        })
        .then(res => resolve(res.data))
        .catch(e => reject(e))
   })
}