export class StorageService{
    constructor() {}

    putItem(key : string, value : any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    getItem(key : string) : any {
        return localStorage.getItem(key);
    }

    removeItem(key : string) {
        localStorage.removeItem(key);
    }

}