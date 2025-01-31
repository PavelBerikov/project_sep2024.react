export const retriveLocalStorage =<T> (key:string) => {
    const obj = localStorage.getItem(key) || '';
    if (!obj){
        return {} as T;
    }
    const parsed = JSON.parse(obj);
    return parsed as T;
}