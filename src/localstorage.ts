interface SStorage<T> {
    [key:string]: T
}

// using generic
class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value:T) {
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()

stringsStorage.get("a")
stringsStorage.set("hello", "what's wrong?")

const booleansStorage = new LocalStorage<boolean>()

booleansStorage.get("b");
booleansStorage.set("hello", true)