abstract class Store {
  abstract  get(name: string): any
  abstract  set(key: string, value: string): void
}

class SessionStorage<T = any> extends Store{
    get(name: string): T {
       return JSON.parse(window.sessionStorage.getItem(name) || '{}')
    }
    set(key: string, value: any): void {
        window.sessionStorage.setItem(key, JSON.stringify(value))
    }
}
export default SessionStorage