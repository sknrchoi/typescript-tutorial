"use strict";
// using generic
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringsStorage = new LocalStorage();
stringsStorage.get("a");
stringsStorage.set("hello", "what's wrong?");
const booleansStorage = new LocalStorage();
booleansStorage.get("b");
booleansStorage.set("hello", true);
