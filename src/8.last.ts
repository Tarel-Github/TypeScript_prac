interface SStotage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStotage<T>;
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

//바로 아래 const에서, LocalStrage에서 T를 string으로 정의해 주었음
const stringsStorage = new LocalStorage<string>();
stringsStorage.get("key");
stringsStorage.set("value", "ㅁㄴㅇㄹ");

//바로 아래 const에서, LocalStrage에서 T를 boolean으로 정의해 주었음
const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get("xxx");
booleansStorage.set("value", false);
